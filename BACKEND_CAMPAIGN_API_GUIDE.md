# Backend API Implementation Guide for Campaign Management

This guide shows how to implement the campaign management API endpoints with MongoDB.

## Prerequisites
```bash
npm install express mongoose cors dotenv
```

## MongoDB Schema (models/Campaign.js)

```javascript
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  campaignName: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  emailContent: {
    type: String,
    required: true
  },
  recipientList: [{
    type: String,
    trim: true
  }],
  recipients: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['draft', 'sent', 'scheduled'],
    default: 'draft'
  },
  sentDate: {
    type: Date,
    default: null
  },
  openRate: {
    type: String,
    default: '0%'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Campaign', campaignSchema);
```

## API Routes (routes/campaigns.js)

```javascript
const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');
const auth = require('../middleware/auth'); // Your auth middleware

// Get all campaigns for authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const { status } = req.query;
    const query = { userId: req.user.id };
    
    if (status) {
      query.status = status;
    }
    
    const campaigns = await Campaign.find(query)
      .sort({ createdAt: -1 });
    
    res.json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get campaign statistics
router.get('/stats', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    
    const totalCampaigns = await Campaign.countDocuments({ userId });
    const activeCampaigns = await Campaign.countDocuments({ 
      userId, 
      status: 'sent' 
    });
    
    const campaigns = await Campaign.find({ userId });
    const totalEmailsSent = campaigns.reduce((sum, c) => sum + c.recipients, 0);
    
    // Calculate average open rate
    const sentCampaigns = campaigns.filter(c => c.status === 'sent' && c.openRate);
    const avgOpenRate = sentCampaigns.length > 0
      ? (sentCampaigns.reduce((sum, c) => {
          const rate = parseFloat(c.openRate.replace('%', ''));
          return sum + rate;
        }, 0) / sentCampaigns.length).toFixed(1) + '%'
      : '0%';
    
    res.json({
      totalCampaigns,
      activeCampaigns,
      totalEmailsSent,
      averageOpenRate: avgOpenRate
    });
  } catch (error) {
    console.error('Error fetching campaign stats:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create new campaign
router.post('/', auth, async (req, res) => {
  try {
    const {
      campaignName,
      subject,
      emailContent,
      recipientList,
      recipients
    } = req.body;
    
    // Validate required fields
    if (!campaignName || !subject || !emailContent || !recipientList) {
      return res.status(400).json({ 
        message: 'Missing required fields' 
      });
    }
    
    const campaign = new Campaign({
      campaignName,
      subject,
      emailContent,
      recipientList,
      recipients: recipients || recipientList.length,
      userId: req.user.id,
      status: 'draft'
    });
    
    await campaign.save();
    
    res.status(201).json(campaign);
  } catch (error) {
    console.error('Error creating campaign:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update campaign
router.put('/:id', auth, async (req, res) => {
  try {
    const campaign = await Campaign.findOne({
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    
    // Don't allow editing sent campaigns
    if (campaign.status === 'sent') {
      return res.status(400).json({ 
        message: 'Cannot edit sent campaigns' 
      });
    }
    
    const {
      campaignName,
      subject,
      emailContent,
      recipientList
    } = req.body;
    
    if (campaignName) campaign.campaignName = campaignName;
    if (subject) campaign.subject = subject;
    if (emailContent) campaign.emailContent = emailContent;
    if (recipientList) {
      campaign.recipientList = recipientList;
      campaign.recipients = recipientList.length;
    }
    
    await campaign.save();
    
    res.json(campaign);
  } catch (error) {
    console.error('Error updating campaign:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete campaign
router.delete('/:id', auth, async (req, res) => {
  try {
    const campaign = await Campaign.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    
    res.json({ message: 'Campaign deleted successfully' });
  } catch (error) {
    console.error('Error deleting campaign:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Send campaign
router.post('/:id/send', auth, async (req, res) => {
  try {
    const campaign = await Campaign.findOne({
      _id: req.params.id,
      userId: req.user.id
    });
    
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    
    if (campaign.status === 'sent') {
      return res.status(400).json({ 
        message: 'Campaign already sent' 
      });
    }
    
    // Here you would implement actual email sending logic
    // For now, just update the status
    campaign.status = 'sent';
    campaign.sentDate = new Date();
    
    await campaign.save();
    
    res.json({ 
      message: 'Campaign sent successfully',
      campaign 
    });
  } catch (error) {
    console.error('Error sending campaign:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
```

## Main Server Setup (server.js)

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/campaigns', require('./routes/campaigns'));

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Environment Variables (.env)

```env
MONGODB_URI=mongodb://localhost:27017/realestate_campaigns
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/realestate_campaigns

PORT=8000
JWT_SECRET=your_jwt_secret_key_here
```

## Auth Middleware (middleware/auth.js)

```javascript
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  // Check if no token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
```

## Testing the API

### Create Campaign
```bash
curl -X POST http://localhost:8000/api/campaigns \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "campaignName": "Test Campaign",
    "subject": "Test Subject",
    "emailContent": "Test email content",
    "recipientList": ["test1@example.com", "test2@example.com"]
  }'
```

### Get All Campaigns
```bash
curl http://localhost:8000/api/campaigns \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Get Campaign Stats
```bash
curl http://localhost:8000/api/campaigns/stats \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Delete Campaign
```bash
curl -X DELETE http://localhost:8000/api/campaigns/CAMPAIGN_ID \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Notes

1. Make sure MongoDB is running locally or use MongoDB Atlas
2. Update the MONGODB_URI in your .env file
3. Implement proper authentication in your auth middleware
4. Add email sending functionality in the send campaign endpoint
5. Add proper validation and error handling as needed
6. Consider adding rate limiting for production use

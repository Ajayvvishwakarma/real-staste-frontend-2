import React, { useState, useRef, useEffect } from "react";

const officeAreas = [
  { 
    label: "Reception Area", 
    value: "reception", 
    image: "/360img/IMG-20250920-WA0004.jpg",
    description: "Modern reception area with contemporary design",
    fallbackImage: "/360img/IMG-20250920-WA0005.jpg"
  },
  { 
    label: "Ground Floor Workspace", 
    value: "GF_workspace", 
    image: "/360img/IMG-20250920-WA0006.jpg",
    description: "Open workspace with collaborative environment",
    fallbackImage: "/360img/IMG-20250920-WA0007.jpg"
  },
  { 
    label: "First Floor Workspace", 
    value: "F1_workspace", 
    image: "/360img/IMG-20250920-WA0008.jpg",
    description: "Dynamic workspace with modern facilities",
    fallbackImage: "/360img/IMG-20250920-WA0009.jpg"
  },
  { 
    label: "Executive Office", 
    value: "executive", 
    image: "/360img/IMG-20250920-WA0010.jpg",
    description: "Premium executive office with luxury furnishing",
    fallbackImage: "/360img/IMG-20250920-WA0011.jpg"
  },
  { 
    label: "Meeting Room", 
    value: "meeting", 
    image: "/360img/IMG-20250920-WA0012.jpg",
    description: "Professional conference room for team meetings",
    fallbackImage: "/360img/IMG-20250920-WA0013.jpg"
  },
  { 
    label: "Break Room", 
    value: "break", 
    image: "/360img/IMG-20250920-WA0014.jpg",
    description: "Comfortable break area for employees",
    fallbackImage: "/360img/IMG-20250920-WA0015.jpg"
  },
  { 
    label: "Game Zone", 
    value: "gameZone", 
    image: "/360img/IMG-20250920-WA0016.jpg",
    description: "Recreation area with games and relaxation space",
    fallbackImage: "/360img/IMG-20250920-WA0017.jpg"
  },
  { 
    label: "Main Lobby", 
    value: "lobby", 
    image: "/360img/IMG-20250920-WA0018.jpg",
    description: "Impressive main lobby entrance",
    fallbackImage: "/360img/IMG-20250920-WA0019.jpg"
  },
  { 
    label: "North Wing Office", 
    value: "north_wing", 
    image: "/360img/IMG-20250920-WA0020.jpg",
    description: "Northern office section with natural lighting",
    fallbackImage: "/360img/IMG-20250920-WA0021.jpg"
  },
  { 
    label: "South Wing Office", 
    value: "south_wing", 
    image: "/360img/IMG-20250920-WA0022.jpg",
    description: "Southern office area with panoramic views",
    fallbackImage: "/360img/IMG-20250920-WA0023.jpg"
  },
  { 
    label: "East Wing Workspace", 
    value: "east_wing", 
    image: "/360img/IMG-20250920-WA0024.jpg",
    description: "Eastern workspace with morning sunlight",
    fallbackImage: "/360img/IMG-20250920-WA0025.jpg"
  },
  { 
    label: "West Wing Workspace", 
    value: "west_wing", 
    image: "/360img/IMG-20250920-WA0026.jpg",
    description: "Western workspace with evening ambiance",
    fallbackImage: "/360img/IMG-20250920-WA0027.jpg"
  },
  { 
    label: "Central Hub", 
    value: "central_hub", 
    image: "/360img/IMG-20250920-WA0028.jpg",
    description: "Central collaboration hub for all teams",
    fallbackImage: "/360img/IMG-20250920-WA0029.jpg"
  },
  { 
    label: "Tech Center", 
    value: "tech_center", 
    image: "/360img/IMG-20250920-WA0030.jpg",
    description: "Technology center with advanced equipment",
    fallbackImage: "/360img/IMG-20250920-WA0031.jpg"
  },
  { 
    label: "Training Room", 
    value: "training_room", 
    image: "/360img/IMG-20250920-WA0032.jpg",
    description: "Professional training and seminar room",
    fallbackImage: "/360img/IMG-20250920-WA0033.jpg"
  },
  { 
    label: "Creative Studio", 
    value: "creative_studio", 
    image: "/360img/IMG-20250920-WA0034.jpg",
    description: "Creative studio for design and innovation",
    fallbackImage: "/360img/IMG-20250920-WA0035.jpg"
  },
  { 
    label: "Cafeteria", 
    value: "cafeteria", 
    image: "/360img/IMG-20250920-WA0036.jpg",
    description: "Modern cafeteria with dining facilities",
    fallbackImage: "/360img/IMG-20250920-WA0037.jpg"
  },
  { 
    label: "Outdoor Terrace", 
    value: "outdoor_terrace", 
    image: "/360img/IMG-20250920-WA0038.jpg",
    description: "Beautiful outdoor terrace for relaxation",
    fallbackImage: "/360img/IMG-20250920-WA0039.jpg"
  },
  { 
    label: "Storage Area", 
    value: "storage_area", 
    image: "/360img/IMG-20250920-WA0040.jpg",
    description: "Organized storage and utility area",
    fallbackImage: "/360img/IMG-20250920-WA0041.jpg"
  },
  { 
    label: "Server Room", 
    value: "server_room", 
    image: "/360img/IMG-20250920-WA0042.jpg",
    description: "Secure server room with IT infrastructure",
    fallbackImage: "/360img/IMG-20250920-WA0043.jpg"
  },
  { 
    label: "VIP Lounge", 
    value: "vip_lounge", 
    image: "/360img/IMG-20250920-WA0044.jpg",
    description: "Exclusive VIP lounge for special guests",
    fallbackImage: "/360img/IMG-20250920-WA0045.jpg"
  },
  { 
    label: "Wellness Center", 
    value: "wellness_center", 
    image: "/360img/IMG-20250920-WA0046.jpg",
    description: "Employee wellness and fitness center",
    fallbackImage: "/360img/IMG-20250920-WA0047.jpg"
  },
  { 
    label: "Boardroom", 
    value: "boardroom", 
    image: "/360img/IMG-20250920-WA0048.jpg",
    description: "Executive boardroom for important meetings",
    fallbackImage: "/360img/IMG-20250920-WA0049.jpg"
  },
  { 
    label: "Innovation Lab", 
    value: "innovation_lab", 
    image: "/360img/IMG-20250920-WA0050.jpg",
    description: "Innovation laboratory for research and development",
    fallbackImage: "/360img/IMG-20250920-WA0051.jpg"
  },
  { 
    label: "Library & Study Area", 
    value: "library", 
    image: "/360img/IMG-20250920-WA0052.jpg",
    description: "Quiet library and study area for focused work",
    fallbackImage: "/360img/IMG-20250920-WA0053.jpg"
  },
  { 
    label: "Main Entrance Hall", 
    value: "entrance_hall", 
    image: "/360img/IMG-20250920-WA0054.jpg",
    description: "Grand entrance hall with impressive architecture",
    fallbackImage: "/360img/IMG-20250920-WA0055.jpg"
  },
];

const Company_interrior_360view = () => {
  const [selectedArea, setSelectedArea] = useState(officeAreas[0]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  // Create image array for current area (main + fallback)
  const getCurrentAreaImages = () => {
    return [selectedArea.image, selectedArea.fallbackImage];
  };

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
    setCurrentImageIndex(0);
  }, [selectedArea]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    console.log(`Image failed to load: ${selectedArea.image}, trying fallback: ${selectedArea.fallbackImage}`);
    setImageError(true);
    setImageLoaded(true);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleRotateLeft = () => {
    setRotation(prev => prev - 90);
  };

  const handleRotateRight = () => {
    setRotation(prev => prev + 90);
  };

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.clientX - position.x, 
        y: e.clientY - position.y 
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const navigateArea = (direction) => {
    const currentIndex = officeAreas.findIndex(area => area.value === selectedArea.value);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : officeAreas.length - 1;
    } else {
      newIndex = currentIndex < officeAreas.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedArea(officeAreas[newIndex]);
  };

  // Navigate between different angles/views of the same area
  const navigateImageAngle = (direction) => {
    const images = getCurrentAreaImages();
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
    setImageLoaded(false);
    setImageError(false);
  };

  // Get current image based on selected area and angle
  const getCurrentImage = () => {
    const images = getCurrentAreaImages();
    return images[currentImageIndex] || images[0];
  };

  return (
    <div className="w-full flex flex-col max-w-7xl mx-auto items-center py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2">
          Bhoomi Real Estate - Office Interior (360° Virtual Tour)
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our modern office spaces with interactive 360-degree views. Navigate through different areas and experience our work environment virtually.
        </p>
      </div>

      <div className="w-full max-w-6xl">
        {/* Area Navigation Tabs */}
        <div className="flex flex-wrap bg-white rounded-xl shadow-lg mb-6 p-2 gap-2 overflow-x-auto">
          {officeAreas.map((area) => (
            <button
              key={area.value}
              className={`px-4 py-3 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none whitespace-nowrap ${
                selectedArea.value === area.value 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
              onClick={() => setSelectedArea(area)}
            >
              {area.label}
            </button>
          ))}
        </div>

        {/* Current Area Info */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedArea.label}</h3>
          <p className="text-gray-600 mb-2">{selectedArea.description}</p>
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-400">
              Image: {getCurrentImage()} ({currentImageIndex + 1} of {getCurrentAreaImages().length})
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigateImageAngle('prev')}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors text-xs"
                title="Previous Angle"
              >
                ← Angle
              </button>
              <button
                onClick={() => navigateImageAngle('next')}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors text-xs"
                title="Next Angle"
              >
                Angle →
              </button>
            </div>
          </div>
        </div>

        {/* 360 View Container */}
        <div className={`relative bg-black rounded-xl overflow-hidden shadow-2xl ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'h-[400px] md:h-[500px] lg:h-[600px]'}`}>
          
          {/* Loading Spinner */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500 border-t-transparent"></div>
              <span className="ml-4 text-white text-lg">Loading...</span>
            </div>
          )}

          {/* Navigation Arrows */}
          <button
            onClick={() => navigateArea('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => navigateArea('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Control Panel */}
          <div className="absolute top-4 right-4 z-30 flex flex-col gap-2">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-2 flex flex-col gap-2">
              
              {/* Zoom Controls */}
              <div className="flex gap-2">
                <button
                  onClick={handleZoomIn}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors focus:outline-none"
                  title="Zoom In"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button
                  onClick={handleZoomOut}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors focus:outline-none"
                  title="Zoom Out"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                  </svg>
                </button>
              </div>

              {/* Rotation Controls */}
              <div className="flex gap-2">
                <button
                  onClick={handleRotateLeft}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors focus:outline-none"
                  title="Rotate Left"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </button>
                <button
                  onClick={handleRotateRight}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors focus:outline-none"
                  title="Rotate Right"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                  </svg>
                </button>
              </div>

              {/* Reset and Fullscreen */}
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors focus:outline-none"
                  title="Reset View"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg transition-colors focus:outline-none"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Zoom Level Indicator */}
            <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm">
              {Math.round(zoom * 100)}%
            </div>
          </div>

          {/* Main Image */}
          <div 
            ref={containerRef}
            className="w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              ref={imageRef}
              src={getCurrentImage()}
              alt={`${selectedArea.label} - 360 view (Angle ${currentImageIndex + 1})`}
              className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              onLoad={handleImageLoad}
              onError={handleImageError}
              draggable={false}
            />
          </div>

          {/* Instructions Overlay */}
          {imageLoaded && (
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-3 text-white text-sm max-w-xs">
              <p className="mb-1">🖱️ <strong>Zoom:</strong> Use +/- buttons</p>
              <p className="mb-1">🔄 <strong>Rotate:</strong> Use rotation buttons</p>
              <p className="mb-1">👆 <strong>Pan:</strong> Click and drag when zoomed</p>
              <p className="mb-1">⚡ <strong>Navigate:</strong> Use arrow buttons or tabs</p>
              <p>📷 <strong>Angles:</strong> Use angle buttons to switch views</p>
            </div>
          )}

          {/* Error Message - Only show if both images fail */}
          {imageError && !imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold mb-2">Image Loading Failed</h3>
                <p className="text-gray-300">Unable to load image for {selectedArea.label}</p>
                <p className="text-gray-400 text-sm mt-2">Path: {getCurrentImage()}</p>
                <p className="text-gray-400 text-xs mt-1">Angle: {currentImageIndex + 1} of {getCurrentAreaImages().length}</p>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Instructions */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 block md:hidden">
          <h4 className="font-semibold text-green-800 mb-2">Mobile Controls:</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Tap the control buttons to zoom and rotate</li>
            <li>• Use navigation arrows to switch areas</li>
            <li>• Tap fullscreen for better viewing</li>
            <li>• Swipe on tabs to see more areas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Company_interrior_360view;
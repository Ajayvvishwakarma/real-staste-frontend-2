import Login_Form from "./Components/postproperty/Login_Form";
import UserRegister from "./Components/postproperty/UserRegister.jsx";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Post_Property from "./Components/Dashboard/Post_Property";
import Dashboard from "./Components/Dashboard/Dashboard";
import { AdminRoutes } from "./Components/Admin_Pannel";
import Buyer_Guide from "./Components/News/Buyer_Guide.jsx";
import Sales_enguiry_Navbar from "./Components/sales_enquiry/Sales_enguiry_Navbar";
import Sales_Enquiry_hero from "./Components/sales_enquiry/Sales_Enquiry_hero";
import Company_interrior_360view from "./Components/sales_enquiry/Company_interrior_360view";
import Submit_your_property from "./Components/owner/Submit_your_property";
import PostProperty from "./Components/owner/PostProperty";
import Insights_nav from "./Components/insights/Insights_nav";
import CityPageTemplate from "./Components/CityPageTemplate";
import CityPageWrapper from "./Components/CityPageWrapper";
import HelpCenter from "./pages/HelpCenter";
import Owner_Servicess from "./Components/owner/Owner_Servicess.jsx";
import Customer_servicess from "./Components/owner/Customer_servicess.jsx";
import Policies from "./Components/News/Policies.jsx";
import NewsPage from "./Components/News/NewsPage.jsx";
import News_Navbar from "./Components/News/News_Navbar.jsx";

import Servicess_Navbar from "./Components/owner/Servicess_Navbar.jsx";
import "./App.css";
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PostProperty_Navbar from "./Components/postproperty/PostProperty_Navbar";
import HelpCenter_Navbar from "./Components/help/HelpCenter_Navbar";
import HelpCenter_hero from "./Components/help/HelpCenter_hero";
import Grow_Your_Business from "./Components/help/Grow_Your_Business";
import HeroSection from "./Components/HeroSection";
import HeroCard_Section from "./Components/HeroCard_Section";
import DreamHome from "./Components/DreamHome";
import Property_City from "./Components/Property_City";
import Real_State_Project from "./Components/Real_State_Project";
import Featured_property_agent from "./Components/Featured_property_agent";
import PropertySection from "./Components/PropertySection";
import HomeSection from "./Components/HomeSection";
import CommercialSpaces from "./Components/CommercialSpaces";
import RealStateBlog from "./Components/RealStateBlog";
import UpperFooter from "./Components/UpperFooter";
import LowerFooter from "./Components/LowerFooter";
import BuyProperty_header from "./Components/BuyProperty_header";
import RentProperty_header from "./Components/RentProperty_header";
import PropertyStatsBar from "./Components/PropertyStatusBar";
import PropertyListingPage from "./Components/PropertyListingPage";
import Buy_FAQ_Section from "./Components/Buy_FAQ_Section";
// import PostPropertyHeroIntegration from "./Components/postproperty/PostPropertyHero";
import PostPropertyOriginal from "./Components/postproperty/PostPropertyOriginal";
import How_It_Works from "./Components/postproperty/How_It_Works";
import RealEstate_choose from "./Components/postproperty/RealEstate_choose";
import Benifit_of_posting from "./Components/postproperty/Benifit_of_posting";
import FAQ from "./Components/postproperty/FAQ.jsx";
import Tips_on_selling from "./Components/postproperty/Tips_on_selling";
import Resale_property from "./Components/rent/Resale_property.jsx";
import FAQ_Questions from "./Components/rent/FAQ_Questions.jsx";
import Project_header from "./Components/projects/project_header.jsx";
import Plot_header from "./Components/plots/Plot_header.jsx";
import Home_Inspection_Services from "./Components/services/Home_Inspection_Services.jsx";
import FAQ_Section from "./Components/services/FAQ_Section.jsx";
import PlotsLandSection from "./Components/PlotsLandSection.jsx";
import InsightsRoutes from "./Components/insights/InsightsRoutes.jsx";
import InsightsLayout from "./Components/insights/InsightsLayout.jsx";
import HomeLoanDeals from "./Components/owner/HomeLoanDeals.jsx";
import BuildersSectionIntegration from "./Components/owner/BuildersSection_Test.jsx";
import DealerServices from "./Components/owner/DealerServices.jsx";
function App() {
  const [selectedCity, setSelectedCity] = React.useState("India");
  const location = useLocation();
  return (
    <div className="w-full max-w-[100vw] bg-white overflow-x-hidden">
      {/* Navbar - Responsive positioning */}
      {location.pathname === "/news" || location.pathname === "/buyer-guide" ? (
        <News_Navbar />
      ) : location.pathname === "/help-center" ? (
        <HelpCenter_Navbar />
      ) : location.pathname.startsWith("/buy") ||
        location.pathname.startsWith("/rent") ||
        location.pathname.startsWith("/projects") ||
        location.pathname.startsWith("/plots") ||
        location.pathname.startsWith("/commercial") ? (
        <Insights_nav />
      ) : location.pathname === "/post-property" ||
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/forgot-password" ||
        location.pathname === "/dashboard" ||
        location.pathname === "/dashboard/post-property" ||
        location.pathname.startsWith("/admin") ||
        location.pathname === "/agent/dashboard" ||
        location.pathname === "/staff/dashboard" ||
        location.pathname === "/services/property-promotion" ||
        location.pathname === "/owner/submit-property" ||
        location.pathname === "/owner/promotion" ||
        location.pathname === "/agent/subscription" ||
        location.pathname.startsWith("/insights") ||
        location.pathname === "/owner/home-loan-deals" ||
        location.pathname === "/builders/india" ||
        location.pathname === "/dealer/services" ||
        location.pathname === "/customer-services" ||
        location.pathname === "/policies" ||
        location.pathname === "/news" ||
        (selectedCity &&
          selectedCity !== "India" &&
          selectedCity !== "All India") ? (
        ""
      ) : location.pathname === "/sales-enquiry" ||
        location.pathname ===
          "/owner/submit-property" ? null : location.pathname ===
        "/owner-services" ? (
        <Servicess_Navbar />
      ) : (
        <Navbar selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      )}

      {/* Content Container - Conditional responsive spacing */}
      <div
        className={`w-full ${
          location.pathname === "/" ||
          (location.pathname === "*" && selectedCity) ||
          location.pathname === "/post-property" ||
          location.pathname === "/login" ||
          location.pathname === "/register" ||
          location.pathname === "/forgot-password" ||
          location.pathname === "/dashboard" ||
          location.pathname === "/dashboard/post-property" ||
          location.pathname.startsWith("/admin") ||
          location.pathname === "/agent/dashboard" ||
          location.pathname === "/staff/dashboard" ||
          location.pathname === "/help-center" ||
          location.pathname === "/sales-enquiry" ||
          location.pathname === "/owner/submit-property" ||
          location.pathname === "/owner/promotion" ||
          location.pathname === "/agent/subscription" ||
          location.pathname.startsWith("/insights") ||
          location.pathname.startsWith("/buy") ||
          location.pathname.startsWith("/rent") ||
          location.pathname.startsWith("/projects") ||
          location.pathname.startsWith("/plots") ||
          location.pathname.startsWith("/commercial") ||
          location.pathname === "/policies" ||
          location.pathname === "/news" ||
          location.pathname === "/buyer-guide"
            ? "content-no-padding"
            : " "
        }`}
      >
        <Routes>
            <Route
              path="/news"
              element={
                <>
                  <NewsPage />
                  <UpperFooter />
                  <LowerFooter />
                </>
              }
            />
            <Route
              path="/buyer-guide"
              element={
                <>
                  <Buyer_Guide />
                  <UpperFooter />
                  <LowerFooter />
                </>
              }
            />
            <Route
              path="/policies"
              element={
                <>
                  <Policies />
                  <UpperFooter />
                  <LowerFooter />
                </>
              }
            />
            <Route
              path="/dealer/services"
              element={
                <>
                  <Servicess_Navbar />
                  <DealerServices />
                  <UpperFooter />
                  <LowerFooter />
                </>
              }
            />
            <Route
              path="/builders/india"
              element={
                <>
                  
                  <BuildersSectionIntegration />
                  <UpperFooter />
                  <LowerFooter />
                </>
              }
            />
          {/* /buy/:city route at the top for correct matching */}
          <Route
            path="/buy/:city"
            element={
              <>
                <BuyProperty_header />
                <PropertyStatsBar />
                <PropertyListingPage />
                <Buy_FAQ_Section />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          {/* Generic city route for cities without dedicated pages */}
          <Route
            path="/city/:citySlug"
            element={
              <>
                <CityPageWrapper />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />

          <Route
            path="/help-center"
            element={
              <>
                <HelpCenter_hero />
                <Grow_Your_Business />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route path="/mobile-help" element={<HelpCenter />} />
          <Route
            path="/owner/submit-property"
            element={
              <>
                <Sales_enguiry_Navbar />
                <Submit_your_property />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/owner/promotion"
            element={
              <>
                <PostProperty_Navbar />
                <PostProperty />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/sales-enquiry"
            element={
              <>
                <Sales_enguiry_Navbar />
                <Sales_Enquiry_hero />
                <Company_interrior_360view />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/owner-services"
            element={
              <>
                <Owner_Servicess />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/customer-services"
            element={
              <>
                <Customer_servicess hideMainNavbar={true} />
              </>
            }
          />
          <Route
            path="/owner/home-loan-deals"
            element={
              <>
                <HomeLoanDeals />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          {/* Authentication Routes */}
          <Route
            path="/login"
            element={
              <>
                <Login_Form />
                
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <UserRegister />
               
              </>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <>
                <ForgotPassword />
              </>
            }
          />
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/post-property" element={<Post_Property />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/agent/dashboard" element={<Dashboard />} />
          <Route path="/staff/dashboard" element={<Dashboard />} />

          {/* Post Property Dashboard Route */}
          <Route
            path="/post-property"
            element={
              <>
                <PostProperty_Navbar />
                <PostPropertyOriginal />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />

          {/* Agent Service Routes - Components not available */}
          <Route
            path="/agents/:city"
            element={
              <>
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/agents/:city/:locality"
            element={
              <>
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/services/:city"
            element={
              <>
                <Home_Inspection_Services />
                <FAQ_Section />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/services/:city/:service"
            element={
              <>
                <Home_Inspection_Services />
                <FAQ_Section />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/post-property/:city"
            element={
              <>
                <PostProperty_Navbar />
                <PostPropertyOriginal />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/buy"
            element={
              <>
                <BuyProperty_header />
                <PropertyStatsBar />
                <PropertyListingPage />
                <Buy_FAQ_Section />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/buy/:city"
            element={
              <>
                <BuyProperty_header />
                <PropertyStatsBar />
                <PropertyListingPage />
                <Buy_FAQ_Section />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/rent"
            element={
              <>
                <RentProperty_header />
                <PropertyStatsBar />
                <PropertyListingPage propertyType="rent" />
                <Buy_FAQ_Section />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/rent/:city"
            element={
              <>
                <RentProperty_header />
                <PropertyStatsBar />
                <PropertyListingPage propertyType="rent" />
                <Buy_FAQ_Section />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/buy/:city/:locality"
            element={
              <>
                <BuyProperty_header />
                <PropertyStatsBar />
                <PropertyListingPage />
                <Buy_FAQ_Section />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/rent/:city"
            element={
              <>
                <BuyProperty_header />
                <PropertyStatsBar />
                <PropertyListingPage />
                <Resale_property />
                <FAQ_Questions />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/rent/:city/:locality"
            element={
              <>
                <BuyProperty_header />
                <PropertyStatsBar />
                <PropertyListingPage />
                <Resale_property />
                <FAQ_Questions />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/projects/:city"
            element={
              <>
                <Project_header />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/projects/:city/:locality"
            element={
              <>
                <Project_header />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/plots/:city"
            element={
              <>
                <Plot_header />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/plots/:city/:locality"
            element={
              <>
                <Plot_header />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/post-property-info"
            element={
              <>
                <PostProperty_Navbar />
                <PostPropertyOriginal />
                <UpperFooter />
                <LowerFooter />
              </>
            }
          />
          <Route
            path="/insights/*"
            element={
              <InsightsLayout>
                <InsightsRoutes />
              </InsightsLayout>
            }
          />
          <Route
            path="*"
            element={
              selectedCity === "India" || selectedCity === "All India" ? (
                <>
                  <HeroSection selectedCity={selectedCity} />
                  <HeroCard_Section selectedCity={selectedCity} />
                  <DreamHome />
                  <Featured_property_agent />
                  <Real_State_Project />
                  <PlotsLandSection />
                  <PropertySection />
                  <HomeSection />
                  <Property_City />
                  <CommercialSpaces />
                  <RealStateBlog />
                  <UpperFooter />
                  <LowerFooter />
                </>
              ) : (
                <>
                  <CityPageTemplate
                    cityName={selectedCity}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                  />
                  <UpperFooter />
                  <LowerFooter />
                </>
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

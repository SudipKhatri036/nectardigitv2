import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const BlogContent = lazy(() => import("./components/blogContent/BlogContent"));
const OurTeam = lazy(() => import("./components/ourTeam/OurTeam"));
const Career = lazy(() => import("./components/career/Career"));
const ErrorPage = lazy(() => import("./components/errorPage/ErrorPage"));
const MarketingContent = lazy(() => import("./pages/MarketingContent"));
const PortfolioDetails = lazy(() =>
  import("./components/portfolioDetails/PortfolioDetails")
);
const ServiceProductDescription = lazy(() =>
  import("./components/servicesProductDescription/ProductDescription")
);
const PrivacyPolicy = lazy(() =>
  import("./components/privacyPolicy/PrivacyPolicy")
);
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Login from "./components/login/Login";
import Loader from "./components/loader/Loader";

// import About from "./pages/About";
// import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import ServiceProductDescription from "./components/servicesProductDescription/ProductDescription";
// import BlogContent from "./components/blogContent/BlogContent";
// import PortfolioDetails from "./components/portfolioDetails/PortfolioDetails";
// import OurTeam from "./components/ourTeam/OurTeam";
// import Career from "./components/career/Career";
// import ErrorPage from "./components/errorPage/ErrorPage";
// import MarketingContent from "./pages/MarketingContent";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {window.location.pathname !== "/login" ? <Header /> : null}

      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceProductDescription />} />
          <Route path="marketing/:id" element={<MarketingContent />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogContent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/career" element={<Career />} />
          <Route path="/privacy-and-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
      {window.location.pathname !== "/login" ? <Footer /> : null}
    </BrowserRouter>
  );
}

export default App;

import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins"; 
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css" // Weight 500.
import "@fontsource/poppins/600.css" 
import "@fontsource/poppins/900-italic.css" // Italic variant.
import '../src/assets/css/styles.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/howwework.css';
import '../src/assets/css/workwithus.css';
import '../src/assets/css/csrpartnership.css';
import '../src/assets/css/helpingfarmer.css';
import '../src/assets/css/naturalwayoffarming.css';
import '../src/assets/css/healthierfood.css';
import '../src/assets/css/watermanagement.css';
import '../src/assets/css/advancingsustainability.css';
import '../src/assets/css/regenerativeagriculture.css';
import '../src/assets/css/ourjourney.css';
import '../src/assets/css/newsnevents.css';
import '../src/assets/css/newsneventssub.css';

import '../src/assets/css/donate.css';

/** User login info**/

import '../src/assets/css/signup.css';
import '../src/assets/css/forgotpassword.css';
import '../src/assets/css/user-dashboard.css';
import '../src/assets/css/page-found.css';


/* Header & Footer */
import Header from "./common/header";
import Footer from "./common/footer";

/*pages */
const Home = React.lazy(() => import("./pages/home"));
const Howwework = React.lazy(() => import("./pages/howwework"));
const Location = React.lazy(() => import("./pages/location"));
const Ourphilosophy = React.lazy(() => import("./pages/ourphilosophy"));
const Aboutus = React.lazy(() => import("./pages/about-us"));
const Contact = React.lazy(() => import("./pages/contact-us"));
const Sustainable = React.lazy(() => import("./pages/Mfmn-around-the-globe"));
const Csrpartnership = React.lazy(() => import("./pages/csrpartnership"));
const Workwithus = React.lazy(() => import("./pages/workwithus"));
const Helpingfarmer = React.lazy(() => import("./pages/helpingfarmer"));
const Naturalwayoffarming = React.lazy(() => import("./pages/naturalwayoffarming"));
const Healthierfood = React.lazy(() => import("./pages/healthierfood"));
const Watermanagement = React.lazy(() => import("./pages/watermanagement"));
const Advancingsustainability = React.lazy(() => import("./pages/advancingsustainability"));
const Regenerativeagriculture = React.lazy(() => import("./pages/regenerativeagriculture"));
const Ourpeople = React.lazy(() => import("./pages/ourpeople"));
const Ourjourney = React.lazy(() => import("./pages/ourjourney"));
const Gallery = React.lazy(() => import("./pages/gallery"));
const VideoGallery = React.lazy(() => import("./pages/videos"));
// const OurGallery = React.lazy(() => import("./pages/galleryphotos"));

const Newsnevents = React.lazy(() => import("./pages/newsnevents"));
const Newsneventsview = React.lazy(() => import("./pages/upcoming-events/news-event-view-page"));
const Upcomingeventsview = React.lazy(() => import("./pages/upcoming-events/upcoming-event-view-page "));
const Greenearth = React.lazy(() => import("./pages/green-earth"));

const Verify = React.lazy(() => import("./pages/verify"));


const Donate = React.lazy(() => import("./pages/donate"));

const Blog = React.lazy(() => import("./pages/blog"));
const Blog_view = React.lazy(() => import("./pages/blog/blog-single"));

const Signup = React.lazy(() => import("./pages/auth/signup"));
const Login = React.lazy(() => import("./pages/auth/login"));
const Reset = React.lazy(() => import("./pages/reset"));
const Pagenotfound = React.lazy(() => import("./pages/404-page"));
const Thankyoupage = React.lazy(() => import("./pages/thank-you"));

const Forgotpassword = React.lazy(() => import("./pages/auth/forgotpassword"));

const Userdashboard = React.lazy(() => import("./pages/dashboard/user-dashboard"));


// const Watermanagementnew = React.lazy(() => import("./pages/watermanagement-new"));
 

function App() {
  return (
    <Routes >
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="howwework" element={<React.Suspense fallback={<>...</>}><Howwework /></React.Suspense>} />
         <Route path="location" element={<React.Suspense fallback={<>...</>}><Location /></React.Suspense>} />
         <Route path="ourphilosophy" element={<React.Suspense fallback={<>...</>}><Ourphilosophy /></React.Suspense>} />
         <Route path="aboutus" element={<React.Suspense fallback={<>...</>}><Aboutus /></React.Suspense>} />
         <Route path="contactus" element={<React.Suspense fallback={<>...</>}><Contact /></React.Suspense>} />
         <Route path="csrpartnership" element={<React.Suspense fallback={<>...</>}><Csrpartnership /></React.Suspense>} />
         <Route path="workwithus" element={<React.Suspense fallback={<>...</>}><Workwithus /></React.Suspense>} />
         <Route path="helpingfarmer" element={<React.Suspense fallback={<>...</>}><Helpingfarmer /></React.Suspense>} />
         <Route path="naturalwayoffarming" element={<React.Suspense fallback={<>...</>}><Naturalwayoffarming /></React.Suspense>} />
         <Route path="healthierfood" element={<React.Suspense fallback={<>...</>}><Healthierfood /></React.Suspense>} />
         <Route path="watermanagement" element={<React.Suspense fallback={<>...</>}><Watermanagement /></React.Suspense>} />
         <Route path="advancingsustainability" element={<React.Suspense fallback={<>...</>}><Advancingsustainability /></React.Suspense>} />
         <Route path="regenerativeagriculture" element={<React.Suspense fallback={<>...</>}><Regenerativeagriculture /></React.Suspense>} />
         <Route path="ourpeople" element={<React.Suspense fallback={<>...</>}><Ourpeople /></React.Suspense>} />
        <Route path="ourjourney" element={<React.Suspense fallback={<>...</>}><Ourjourney /></React.Suspense>} />
        <Route path="gallery" element={<React.Suspense fallback={<>...</>}><Gallery /></React.Suspense>} />
        <Route path="videos" element={<React.Suspense fallback={<>...</>}><VideoGallery /></React.Suspense>} />
        {/* <Route path="galleryphotos" element={<React.Suspense fallback={<>...</>}><OurGallery /></React.Suspense>} /> */}

        <Route path="around-the-globe" element={<React.Suspense fallback={<>...</>}><Sustainable /></React.Suspense>} />
        <Route path="green-earth" element={<React.Suspense fallback={<>...</>}><Greenearth /></React.Suspense>} />
        {/* <Route path="newsnevents" element={<React.Suspense fallback={<>...</>}><Newsnevents /></React.Suspense>} /> */}
        <Route path="newsnevents/:slug" element={<React.Suspense fallback={<>...</>}><Newsneventsview/></React.Suspense>} />
        <Route path="upcomingevents/:slug" element={<React.Suspense fallback={<>...</>}><Upcomingeventsview/></React.Suspense>} />
        
        <Route path="blog" element={<React.Suspense fallback={<>...</>}><Blog /></React.Suspense>} />
        <Route path="blog/:slug" element={<React.Suspense fallback={<>...</>}><Blog_view/></React.Suspense>} />
        
        <Route path="donate" element={<React.Suspense fallback={<>...</>}><Donate /></React.Suspense>} />

        <Route path="signup" element={<React.Suspense fallback={<>...</>}><Signup /></React.Suspense>} />
        <Route path="/verify/" element={<React.Suspense fallback={<>...</>}><Verify /></React.Suspense>} />
        <Route path="reset" element={<React.Suspense fallback={<>...</>}><Reset /></React.Suspense>} />
        <Route path="login" element={<React.Suspense fallback={<>...</>}><Login /></React.Suspense>} />
        <Route path="forgotpassword" element={<React.Suspense fallback={<>...</>}><Forgotpassword /></React.Suspense>} />
        <Route path="dashboard/user-dashboard" element={<React.Suspense fallback={<>...</>}><Userdashboard /></React.Suspense>} />

        <Route path="thankyou" element={<React.Suspense fallback={<>...</>}><Thankyoupage /></React.Suspense>} />
        <Route path="*" element={<Pagenotfound />} />

       </Route>
     </Routes> 
      );
}

export default App;
 
function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  );
}
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "./components/error404/error404";
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";
import NavBar from "./components/nav-bar/nav-bar";
import AdvertisePage from "./pages/advertise-page/advertise-page";
import AgreementPage from "./pages/agreement-page/agreement-page";
import ContactsPage from "./pages/contacts-page/contact-page";
import FaqPage from "./pages/faq-page/faq-page";
import PolicyPage from "./pages/privacy-policy/privacy-policy";
import RulesPage from "./pages/rules-page/rules-page";
import SupportPage from "./pages/support-page/support-page";

const MainPage = React.lazy(() => import("./pages/main-page/main-page"));
const NewsPage = React.lazy(() => import("./pages/news-page/news-page"));
const PaysPage = React.lazy(() => import("./pages/pays-page/pays-page"));
const TopPage = React.lazy(() => import("./pages/top-page/top-page"));
const ArticlesPage = React.lazy(() =>
  import("./pages/articles-page/articles-page")
);
const CompetitionPage = React.lazy(() =>
  import("./pages/competition-page/competiton-page")
);

const AuthPage = React.lazy(() => import("./pages/login-auth-page/auth"));
const LoginPage = React.lazy(() => import("./pages/login-auth-page/login"));

function App() {
  return (
    <div className="main_wrapper">
      <NavBar />

      <div className="content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/pays" element={<PaysPage />} />
            <Route path="/top" element={<TopPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/competition" element={<CompetitionPage />} />
            <Route path="/advertise" element={<AdvertisePage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/agreement" element={<AgreementPage />} />
            <Route path="/privasy-policy" element={<PolicyPage />} />
            <Route path="/contact" element={<ContactsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/faq" element={<FaqPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/auth" element={<AuthPage />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;

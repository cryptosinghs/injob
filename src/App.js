import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import JobDetail from "./components/JobDetail";
import JobLandingPage from "./components/JobLandingPage";
import AuthPage from "./components/AuthPage";
import ResumeUpload from "./components/ResumeUpload";
import AccountSetting from "./components/AccountSetting";
import JobSearchRecommendation from "./components/JobSearchRecommendation";
import JobRecommendation from "./components/Profile";
import MessagePage from "./components/MessagePage";
import SignupPage from "./components/SignupPage";
import Profile from "./components/Profile";
import JobListingPage from "./components/JobListingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobLandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/box" element={<MessagePage />} />
        <Route path="/auth" element={<JobLandingPage />} />
        <Route path="/resume-upload" element={<ResumeUpload />} />
        <Route path="/account-settings" element={<AccountSetting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/job-list" element={<JobListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

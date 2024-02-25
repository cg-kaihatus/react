import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import UserHomePage from "./components/pages/UserHomePage";
import UserCollectionPage from "./components/pages/UserCollectionPage";
import UserMaterialPage from "./components/pages/UserMaterialPage";
import UserSiteMapPage from "./components/pages/UserSiteMapPage";
import UserMyAccountPage from "./components/pages/UserMyAccountPage";
import UserInfoPage from "./components/pages/UserInfoPage";
import UserPassPage from "./components/pages/UserPassPage";
import UserMailPage from "./components/pages/UserMailPage";
import UserContactPage from "./components/pages/UserContactPage";
import UserTermsPage from "./components/pages/UserTermsPage";
import UserChat from './components/organisms/UserChat'; 
import AdminHomePage from "./components/pages/AdminHomePage";
import AdminPagePage from './components/pages/AdminPagePage';
import AdminContentPage from './components/pages/AdminContentPage';
import AdminChatCompanyPage from './components/pages/AdminChatCompanyPage';
import AdminChatUserPage from './components/pages/AdminChatUserPage';
import AdminChatPage from './components/pages/AdminChatPage';
import AdminUserCompanyPage from './components/pages/AdminUserCompanyPage';
import AdminUserListPage from './components/pages/AdminUserListPage';
import AdminUserPage from './components/pages/AdminUserPage';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/home" element={<UserHomePage />} />
      <Route path="/collection" element={<UserCollectionPage />} />
      <Route path="/material" element={<UserMaterialPage />} />
      <Route path="/sitemap" element={<UserSiteMapPage />} />
      <Route path="/myAccount" element={<UserMyAccountPage />} />
      <Route path="/userInfo" element={<UserInfoPage />} />
      <Route path="/userPass" element={<UserPassPage />} />
      <Route path="/userMail" element={<UserMailPage />} />
      <Route path="/contact" element={<UserContactPage />} />
      <Route path="/terms" element={<UserTermsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/chattest" element={<UserChat height={500}/>} /> {/* テスト用 */}

      <Route path="/admin/home" element={<AdminHomePage />} />
      <Route path="/admin/page" element={<AdminPagePage />} />
      <Route path="/admin/content" element={<AdminContentPage />} />
      <Route path="/admin/chat-company" element={<AdminChatCompanyPage />} />
      <Route path="/admin/chat-user" element={<AdminChatUserPage />} />
      <Route path="/admin/chat" element={<AdminChatPage />} />
      <Route path="/admin/user-company" element={<AdminUserCompanyPage />} />
      <Route path="/admin/user-list" element={<AdminUserListPage />} />
      <Route path="/admin/user" element={<AdminUserPage />} />

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
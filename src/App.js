import './css/style.css';

import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";

import NotFoundPage from "./pages/NotFoundPage";
import Layout from './components/Layout';
import { Route, Routes } from "react-router-dom";



function App(props) {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/chats/:idChat'} element={<ChatPage />} />
          <Route path={'/blog'} element={<BlogPage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/profile'} element={<ProfilePage />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>

  );


}




export default App;

import './css/style.css';

import { useState } from 'react';

import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from './components/Layout';
import { Route, Routes } from "react-router-dom";

import { themes, ThemeContext} from "./context";


function App(props) {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme: toggleTheme }}>
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
    </ThemeContext.Provider>

  );


}




export default App;

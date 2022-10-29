import './css/style.css';

import { useEffect, useState } from 'react';

import HomePage from "./pages/HomePage";
import Chat2Page from "./pages/Chat2Page";

import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import CatsPage from "./pages/CatsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";


import Layout from './components/Layout';
import { Route, Routes } from "react-router-dom";

import { themes, ThemeContext } from "./context";
import { useDispatch, useSelector } from 'react-redux';

import { checkAuthedInitiate } from "./store/reducers/fireBaseReducer";

function App(props) {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(checkAuthedInitiate());
  }, []);


  const contact = useSelector(state => state.contacts.contacts);


  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
  }

  return (

    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme: toggleTheme }}>
      <div>
        {contact}
        <button onClick={() => dispatch({ type: 'increase' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrease' })}>-</button>
      </div>

      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/chats-2/:chatId'} element={<Chat2Page />} />
          <Route path={'/chats-2'} element={<Chat2Page />} />
          <Route path={'/blog'} element={<BlogPage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/profile'} element={<ProfilePage />} />
          <Route path={'/cats'} element={<CatsPage />} />

          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/login'} element={<LoginPage />} />

          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>

  );


}




export default App;

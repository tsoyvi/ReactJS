export const Routes = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
    }, []);
    
    return (
        <BrowserRouter>
            <Header />
            <ul>
                <li>
                    <Link to="/chats">Chats</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/gists">Gists</Link>
                </li>
                <li>
                    <Link to="/signup">Registration</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <ChatList />
            <Switch>
                <PublicRoute authenticated={authed} exact path="/">
                    <Home />
                </PublicRoute>
                <PublicRoute authenticated={authed} path="/login">
                    <Login />
                </PublicRoute>
                <PublicRoute authenticated={authed} path="/signup">
                    <SignUp />
                </PublicRoute>
                <PrivateRoute authenticated={authed} path="/chats/:chatId?">

                    <App />
                </PrivateRoute>
                <PrivateRoute authenticated={authed} path="/profile">
                    <Profile />
                </PrivateRoute>
                <PublicRoute authenticated={authed} path="/gists">
                    <GistsList />
                </PublicRoute>
            </Switch>
        </BrowserRouter>
    );
};
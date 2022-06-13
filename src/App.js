import React from "react";
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from "./Components/LoginScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageLayoutWrapper from "./Components/PageLayoutWrapper";
import VideoPlayer from "./Components/VideoPlayer";

const App = () => {
    return <BrowserRouter>
        <PageLayoutWrapper>
            <Routes>
                <Route exact path="/login"
                    element={<LoginScreen/>}/>
                <Route path="/"
                    element={<HomeScreen/>}/>
                <Route path="/videoplayer/:id"
                    element={<VideoPlayer/>}/>
            </Routes>
        </PageLayoutWrapper>
    </BrowserRouter>
}

export default App;

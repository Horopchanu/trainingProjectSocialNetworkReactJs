import "./App.css";
import React from "react";
import Nav from "./components/Nav/nav";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Nav />
        <div className="main">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

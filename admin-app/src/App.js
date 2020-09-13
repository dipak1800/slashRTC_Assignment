import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage/Homepage";
import MessagePage from "./Pages/MessagePage/Message";
import VoiceMessagePage from "./Pages/VoiceMessagePage/VoicePage";
import DashBoardpage from "./Pages/DashBoardPage/DashBoard";
import PendingWorkPage from "./Pages/PendingWorkPage/Pending";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import SettingPage from "./Pages/SettingPage/SettingPage";
import Setting_Dialogues_Page from "./Pages/Setting_Dialogues_Page/settingDialogues";
import Page_Not_Found from "./Pages/PageNotFound/Page_Not_Found";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/messages" exact component={MessagePage} />
        <Route path="/voiceMessages" exact component={VoiceMessagePage} />
        <Route path="/dashboard" exact component={DashBoardpage} />{" "}
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/pendings" exact component={PendingWorkPage} />
        <Route path="/settings" exact component={SettingPage} />
        <Route
          path="/settings/Dialogues"
          exact
          component={Setting_Dialogues_Page}
        />
        <Route path="*" component={Page_Not_Found} />
      </Switch>
    </div>
  );
}

export default App;

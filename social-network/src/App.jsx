import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar dialogsData={props.state.dialogsPage.dialogsData} />
        <div className="app-content content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  postsData={props.state.profilePage.postsData}
                  newPostText={props.state.profilePage.newPostText}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogsData={props.state.dialogsPage.dialogsData}
                  messagesData={props.state.dialogsPage.messagesData}
                  newMessageText={props.state.dialogsPage.newMessageText}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

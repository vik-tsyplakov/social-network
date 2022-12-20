import "./App.css";
import logo from "./img/header/logo.svg";
import bird from "./img/mainContent/bird.jpg";
import avatar from "./img/mainContent/avatar.png";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src={logo} width="24" height="24" alt="logo" />
      </header>
      <nav className="nav">
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <li>Setting</li>
        </ul>
      </nav>
      <div className="content">
        <div className="">
          <img src={bird} width="100%" height="800" alt="content" />
        </div>
        <div className="avatarAndPosts">
          <img src={avatar} alt="avatar" />
          <div className="description">description</div>
        </div>
        <div className="myPosts">
          <div className="newPost">New post</div>
          <div className="post1">Post1</div>
          <div className="post2">Post2</div>
        </div>
      </div>
    </div>
  );
}

export default App;

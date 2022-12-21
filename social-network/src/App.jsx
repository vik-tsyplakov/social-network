import "./App.css";
import Header from "./components/Header";
import bird from "./img/mainContent/bird.jpg";
import avatar from "./img/mainContent/avatar.png";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
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
        <div>
          <img src={bird} className="imgContent" alt="content" />
        </div>
        <div className="avatarAndPosts">
          <img src={avatar} className="avatar" alt="avatar" />
          <div className="description">
            <p>Name Surname</p>
            <p>Date of Birth: 2 january</p>
            <p>City: Kyiv</p>
            <p>Education: KPI'18</p>
            <p>
              Web Site:
              <a href="https://github.com/vik-tsyplakov">
                github.com/vik-tsyplakov
              </a>
            </p>
          </div>
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

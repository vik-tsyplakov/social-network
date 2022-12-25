import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css";

export default function Dialogs(props) {
  return (
    <div className="content">
      <p>Dialogs</p>
      <div className="dialogs">
        <div className="dialogs__items">
          <div className="dialogs__item">
            <NavLink to="/dialogs/1">Nick</NavLink>
          </div>
          <div className="dialogs__item">
            <NavLink to="/dialogs/2">John</NavLink>
          </div>
          <div className="dialogs__item">
            <NavLink to="/dialogs/3">Ivan</NavLink>
          </div>
          <div className="dialogs__item">
            <NavLink to="/dialogs/4">Anna</NavLink>
          </div>
          <div className="dialogs__item">
            <NavLink to="/dialogs/5">Alex</NavLink>
          </div>
          <div className="dialogs__item">
            <NavLink to="/dialogs/6">Harry</NavLink>
          </div>
        </div>
        <div className="dialogs__messages">
          <div className="dialogs__message">Hi!</div>
          <div className="dialogs__message">What`s up?</div>
          <div className="dialogs__message">Where are you?</div>
        </div>
      </div>
    </div>
  );
}

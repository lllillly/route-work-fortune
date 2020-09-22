import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navi">
        <h1>별자리 운세</h1>
        <h3>자신의 별자리에 맞는 내일의 운세를 알아봐요!</h3>
        <button>
          <NavLink to="/ascreen">물병자리</NavLink>
        </button>
        <button>
          <NavLink to="/bscreen">물고기자리</NavLink>
        </button>
        <button>
          <NavLink to="/cscreen">양자리</NavLink>
        </button>
        <button>
          <NavLink to="/dscreen">황소자리</NavLink>
        </button>
        <button>
          <NavLink to="/escreen">쌍둥이자리</NavLink>
        </button>
        <button>
          <NavLink to="/fscreen">게자리</NavLink>
        </button>
        <button>
          <NavLink to="/gscreen">사자자리</NavLink>
        </button>
        <button>
          <NavLink to="/hscreen">처녀자리</NavLink>
        </button>
        <button>
          <NavLink to="/iscreen">천칭자리</NavLink>
        </button>
        <button>
          <NavLink to="/jscreen">전갈자리</NavLink>
        </button>
        <button>
          <NavLink to="/kscreen">사수자리</NavLink>
        </button>
        <button>
          <NavLink to="/lscreen">염소자리</NavLink>
        </button>
      </div>
    );
  }
}

export default Navigation;

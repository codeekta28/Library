import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getLogoutStatus } from "../Redux/AuthRedux/actioncreater";

function LogInNav() {
  const loginStatus = useSelector((state) => state);
  const dispatch = useDispatch();
//   logout handler
  function logOutHandler() {
    dispatch(getLogoutStatus());
  }
  
  return (
    <>
      <style jsx>{`
        ul {
          display: flex;
          justify-content: center;
          margin: 2rem;
        }
        li {
          list-style: none;
          margin: 0px 28px;
          font-size: 24px;
        }
      `}</style>
      <ul>
        {!loginStatus.loginStatus && <li>Login</li>}
        {loginStatus.loginStatus && <li onClick={logOutHandler}>logout</li>}
        {loginStatus.loginStatus && <li>profile</li>}
      </ul>
    </>
  );
}

export default LogInNav;

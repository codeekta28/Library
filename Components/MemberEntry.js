import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "../Redux/AuthRedux/actioncreater";
import LogInNav from "./LogInNav";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "../styles/adminLogin.module.css";

function MemberEntry() {
  const selector = useSelector((state) => state);
  const [isLogin, setIslogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // const [userInput,setUserInput]=useState({})
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passRef = useRef();
  function toggleLoginSignUp(evt) {
    evt.preventDefault();
    setIslogin((prevState) => !prevState);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    setIsLoading(true);
    if (isLogin) {
      // login
      setIsLoading(false);
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVO_13sfcQWO4QBjx-2fiyNBcUEd4YkV4`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: pass,
            returnSecureToken: true,
          }),
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.error) {
            alert(data.error.message);
          } else {
            alert("You are logged in successfully");
            let newObj = {
              token: data.idToken,
              userName: email,
            };
            dispatch(getLoginStatus(newObj));

            router.replace("/user-page");
          }
        });
    } else {
      // signUp
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      console.log("in else");
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVO_13sfcQWO4QBjx-2fiyNBcUEd4YkV4`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: pass,
            returnSecureToken: true,
          }),
        }
      ).then((res) => {
        setIsLoading(false);

        if (res.ok) {
          alert("You are added successfully");
        } else {
          return res.json().then((val) => {
            let errorMessage = "authentication failed";
            if (val && val.error && val.error.message) {
              errorMessage = val.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    }
    emailRef.current.value = "";
    passRef.current.value = "";
  }

  // function handleChange(evt){
  //   setUserInput({...userInput,[evt.target.name]:evt.target.value})
  // }

  return (
    <div className={styles.mainContainer}>
      {/* <LogInNav/> */}
      <h1 className="text-center py-3">{isLogin ? "Login" : "SignUp"}</h1>
      <form
        action=""
        className=" w-50 m-auto"
        onSubmit={handleSubmit}
      >
        <div className="d-flex justify-content-center p-2 my-2">
          <label htmlFor="email" className="lead mx-2">
            Email:
          </label>
          <input
            className="w-50"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            ref={emailRef}
          />
        </div>
        <div className="d-flex justify-content-center p-2 my-2">
          <label htmlFor="pass" className="lead mx-2">
            Password:
          </label>
          <input
            className="w-50"
            type="password"
            name="pass"
            id="pass"
            placeholder="password"
            ref={passRef}
          />
        </div>
        <br />
        <div className=" d-flex justify-content-center">
          {!isLoading && (
            <button className="btn btn-outline-light ">
              {isLogin ? "Login" : "Create New Account"}
            </button>
          )}
          {isLoading && <p>Sending request....</p>}

          <button
            onClick={toggleLoginSignUp}
            className="btn btn-outline-light mx-3 "
          >
            {isLogin ? "create New Account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MemberEntry;

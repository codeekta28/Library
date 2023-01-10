import Head from "next/head";
import styles from "../styles/adminLogin.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";

function adminLogin({ admin }) {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("admin", admin);
    if (
      userNameRef.current.value === admin.userName &&
      passwordRef.current.value === admin.password
    ) {
      router.replace("/adminPage");
    }else{
      alert("Invalid username or password")
    }
    let newData={
      userName:userNameRef.current.value,
      password:passwordRef.current.value
    }
    userNameRef.current.value=""
    passwordRef.current.value=""
  }

  return (
    <div className={`${styles.mainContainer}`}>
      <Head>
        {/* <!-- Latest compiled and minified CSS --> */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        {/* <!-- Optional theme --> */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        />
      </Head>
    {/* you should use onClick */}
      <div className={`${styles.formContainer} container`}>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <h1 className="text-center">Admin Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className={styles.label} htmlFor="username">
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  ref={userNameRef}
                />
              </div>
              <div className="form-group">
                <label className={styles.label} htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  ref={passwordRef}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-light px-5 ${styles.button}`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
   
  );
}
export default adminLogin;
export const getServerSideProps = async () => {
  // Fetch the JSON data from the API
  const res = await fetch("http://localhost:3000/api/admin");
  const jsonData = await res.json();

  // Return the data as part of the props object
  return {
    props: {
      admin: jsonData,
    },
  };
};


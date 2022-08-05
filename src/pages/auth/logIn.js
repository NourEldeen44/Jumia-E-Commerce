/* eslint-disable eqeqeq */
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { useHistory } from "react-router-dom";

function LogIn() {
  const [user, setUser] = useState({ userEmail: "", Password: "" });
  const [inputErrors, SetInputErrors] = useState({
    userEmailError: null,
    PasswordError: null,
  });
  const [passwordisShowen, setpasswordisShowen] = useState(false);
  const [disblesubmit, setdisblesubmit] = useState(false);
  const his = useHistory();
  const [logLoading, setlogLoading] = useState(false);

  //handling inputs
  const inputHandler = (e) => {
    // setUser({ ...user, [e.target.name]: e.target.value });

    //if useremail
    if (e.target.name == "userEmail") {
      setUser({ ...user, [e.target.name]: e.target.value });
      let pattern = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (e.target.value == 0) {
        SetInputErrors({
          ...inputErrors,
          userEmailError: "this field is required!",
        });
      } else if (e.target.value.search(pattern)) {
        SetInputErrors({ ...inputErrors, userEmailError: "unValid Email" });
      } else {
        SetInputErrors({ ...inputErrors, userEmailError: null });
      }

      //if user password
    } else if (e.target.name == "Password") {
      setUser({ ...user, [e.target.name]: e.target.value });
      if (e.target.value == 0) {
        SetInputErrors({
          ...inputErrors,
          PasswordError: "this field is required!",
        });
      } else {
        SetInputErrors({ ...inputErrors, PasswordError: null });
      }
    }
  };
  const signUser = (e) => {
    e.preventDefault();
    setlogLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.userEmail, user.Password)
      .then((usrcred) => {
        localStorage.setItem("UID", usrcred.user.uid);
        setlogLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        // console.log(`${user.userEmail},,,,${user.Password}`);
        alert(err);
      });
  };
  useEffect(() => {
    //redirect to home if logged in
    if (localStorage.getItem("UID")) {
      his.replace("/home");
    }
    for (const errk in inputErrors ||
      user.userName == "" ||
      user.userEmail == "") {
      if (inputErrors[errk]) {
        setdisblesubmit(true);
      } else {
        setdisblesubmit(false);
      }
    }
  }, [disblesubmit, inputErrors]);

  //material page
  return (
    <>
      <form
        className=" d-flex justify-content-center flex-column align-items-center"
        onSubmit={(e) => signUser(e)}
      >
        {/* email */}
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="userEmail"
            value={user.userEmail}
            onChange={(e) => inputHandler(e)}
          />
          <div className="err text-danger">
            {inputErrors.userEmailError ? inputErrors.userEmailError : null}
          </div>
        </div>

        {/* password */}
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Password
          </label>
          <input
            type={passwordisShowen ? "text" : "password"}
            className="form-control"
            id="InputPassword"
            name="Password"
            value={user.Password}
            onChange={(e) => inputHandler(e)}
          />
          <div className="err text-danger">
            {inputErrors.PasswordError ? inputErrors.PasswordError : null}
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={() => {
                setpasswordisShowen(!passwordisShowen);
              }}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Show Password
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "orange",
            borderColor: "orange",
            width: "15vw",
            fontWeight: "600",
          }}
          value={logLoading ? "Loading.." : "LogIn"}
          disabled={disblesubmit}
        />
      </form>
      <button
        className="btn btn-success"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 15,
          width: "15vw",
        }}
        onClick={() => {
          his.push("/register");
        }}
      >
        New? Register Now
      </button>
    </>
  );
}

export default LogIn;

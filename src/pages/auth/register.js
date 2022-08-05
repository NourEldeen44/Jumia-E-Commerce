/* eslint-disable eqeqeq */
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { useHistory } from "react-router-dom";
function Register() {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    Password: "",
    confirmPassword: "",
  });
  const [inputErrors, SetInputErrors] = useState({
    userNameError: null,
    userEmailError: null,
    PasswordError: null,
    confirmPasswordError: null,
  });
  const [passwordisShowen, setpasswordisShowen] = useState(false);
  const [disblesubmit, setdisblesubmit] = useState(true);
  const [regLoading, setregLoading] = useState(false);
  const his = useHistory();

  //handling inputs
  const inputHandler = (e) => {
    // setUser({ ...user, [e.target.name]: e.target.value });

    //if username
    if (e.target.name == "userName") {
      setUser({ ...user, [e.target.name]: e.target.value });
      let pattern = new RegExp("^[a-zA-Z0-9]{4,12}$");
      if (e.target.value == 0) {
        SetInputErrors({
          ...inputErrors,
          userNameError: "this field is required!",
        });
      } else if (e.target.value.search(pattern)) {
        SetInputErrors({ ...inputErrors, userNameError: "unValid Name" });
      } else {
        SetInputErrors({ ...inputErrors, userNameError: null });
      }
    }
    //if useremail
    else if (e.target.name == "userEmail") {
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
    }

    //if user password
    else if (e.target.name == "Password") {
      setUser({ ...user, [e.target.name]: e.target.value });
      // let pattern = new RegExp("[a-zA-Z0-9]+#+[a-zA-Z0-9]{6,}");
      let pattern = new RegExp("^[a-zA-Z0-9!@#$%^&*<>?|/;:`~=]{6,}$");
      if (e.target.value == 0) {
        SetInputErrors({
          ...inputErrors,
          PasswordError: "this field is required!",
        });
      } else if (e.target.value.search(pattern)) {
        SetInputErrors({ ...inputErrors, PasswordError: "unValid Password" });
      } else {
        SetInputErrors({
          ...inputErrors,
          PasswordError: null,
          confirmPasswordError: "this field is required!",
        });
      }
    }
    //if user confirmpassword
    else if (e.target.name == "confirmPassword") {
      setUser({ ...user, [e.target.name]: e.target.value });
      //   let password = document.getElementById("InputPassword").value;
      if (e.target.value == 0) {
        SetInputErrors({
          ...inputErrors,
          confirmPasswordError: "this field is required!",
        });
      } else if (e.target.value != user.Password) {
        console.log(user.Password);
        SetInputErrors({
          ...inputErrors,
          confirmPasswordError: "Password is incorrect",
        });
      } else {
        SetInputErrors({ ...inputErrors, confirmPasswordError: null });
      }
    }
  };
  const registerUser = (e) => {
    e.preventDefault();
    if (user.Password == "" || user.Password == undefined) {
      alert("please fill password");
    } else if (
      user.confirmPassword == "" ||
      user.confirmPassword == undefined
    ) {
      alert(`please fill confirmed password`);
    } else {
      const auth = getAuth();
      setregLoading(true);
      createUserWithEmailAndPassword(auth, user.userEmail, user.Password)
        .then((usercred) => {
          setregLoading(false);
          localStorage.setItem("UID", usercred.user.uid);
          window.location.reload();
        })
        .catch((err) => {
          alert(err);
        });
    }
    //reg withfirebase auth
  };
  useEffect(() => {
    //redirect to home if logged in
    if (localStorage.getItem("UID")) {
      his.replace("/home");
    }
    for (const errk in inputErrors) {
      if (inputErrors[errk] || user.userName == "" || user.userEmail == "") {
        setdisblesubmit(true);
        console.log("state changedto  " + disblesubmit);
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
        onSubmit={(e) => {
          registerUser(e);
        }}
      >
        {/* User Name */}
        <div className="mb-3">
          <label htmlFor="InputName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            name="userName"
            value={user.userName}
            onChange={(e) => inputHandler(e)}
          />
          <div className="err text-danger">
            {inputErrors.userNameError ? inputErrors.userNameError : null}
          </div>
        </div>
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
        </div>

        {/*confirm password */}
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            confirm Password
          </label>
          <input
            type={passwordisShowen ? "text" : "password"}
            className="form-control"
            id="InputPassword"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={(e) => inputHandler(e)}
          />
          <div className="err text-danger">
            {inputErrors.confirmPasswordError
              ? inputErrors.confirmPasswordError
              : null}
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
          value={regLoading ? "loading..." : "Register"}
          disabled={disblesubmit}
          style={{ backgroundColor: "orange", borderColor: "orange" }}
        />
      </form>
    </>
  );
}

export default Register;

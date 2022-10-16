import {
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../../firebase/firebase.init";

const auth = getAuth(app);

const LoginBootstrap = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        verifyEmail();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("please check your email address and verify it");
    });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("Please enter your email address");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("Reset password email Send, please check your email");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="w-25 mx-auto">
      <h2 className="text-success">Please login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email
          </label>
          <input
            onBlur={handleEmailBlur}
            required
            type="email"
            name="email"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Your Password"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>
      {success && <p>Succesfully Login to the Account</p>}
      <p>
        New to this website please <Link to="/register">Register</Link>{" "}
      </p>
      <p>
        Forgot Password?{" "}
        <button
          type="button"
          onClick={handleForgetPassword}
          className="btn btn-link p-0"
        >
          <small>Reset Password</small>
        </button>{" "}
      </p>
    </div>
  );
};

export default LoginBootstrap;

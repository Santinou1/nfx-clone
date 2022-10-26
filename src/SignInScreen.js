import React from "react";
import "./SignInScreen.css";

function SignInScreen() {
  return (
    <div className="SignInScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signIn__gray">New To Netflix? </span>
          <span className="signIn__link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;

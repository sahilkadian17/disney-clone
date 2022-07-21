import React from "react";

function Login() {
  return (
    <div className="Login__Container">
      <div className="CTA">
        <img src="/images/cta-logo-one.svg" alt="" className="CTA__Logo1" />
        <a href="/" className="Login__SignUp">GET ALL THERE</a>
        <p className="Login__Description">
          © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc.
        </p>
        <img src="/images/cta-logo-two.png" alt="" className="CTA__Logo2" />
      </div>
    </div>
  );
}

export default Login;

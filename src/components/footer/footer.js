import React from "react";
import jumiaLogo from "../../images/Jumia-Logo.png";
import { langContext } from "../../contexts/langContext";
import { useContext } from "react";

const Footer = () => {
  const { lang, setlang } = useContext(langContext);

  return (
    <div>
      {/* Footer */}
      <div
        className="home-footer"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#282828",
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img style={{ width: "100px" }} src={jumiaLogo} alt="" />{" "}
        <span style={{ color: "white", marginBottom: "25px" }}>
          {lang == "en"
            ? "Are You New To jumia? SignUp Now"
            : "هل أنت جديد؟ سجل دخولك الان "}
        </span>
        <div className="email-form">
          <input
            type="text"
            placeholder="enter your email"
            style={{ borderRadius: "4px", borderColor: "transparent" }}
          />
          <input
            type="submit"
            value={"male"}
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              borderRadius: "4px",
              borderColor: "white",
              background: "none",
              borderWidth: "1px",
              color: "white",
              width: "50px",
              height: "30px",
            }}
          />
          <input
            type="submit"
            value={"female"}
            style={{
              borderRadius: "4px",
              borderColor: "white",
              background: "none",
              borderWidth: "1px",
              color: "white",
              width: "60px",
              height: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

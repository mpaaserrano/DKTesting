import React from "react";
import "./Footer.css";

function Footer({
  children,
  bgTop,
  bgMain,
  overlap = 0,
  zIndex = 1
}) {
  return (
    <footer
      className="footer"
      style={{
        marginTop: `-${overlap}px`,
        zIndex: zIndex
      }}
    >
      {/* Top background (opcional) */}
      {bgTop && (
        <div
          className="footer-bg-top"
          style={{ backgroundImage: `url(${bgTop})` }}
        />
      )}

      {/* Main background */}
      {bgMain && (
        <div
          className="footer-bg-main"
          style={{ backgroundImage: `url(${bgMain})` }}
        >
          <div className="footer-content">{children}</div>
        </div>
      )}
    </footer>
  );
}

export default Footer;

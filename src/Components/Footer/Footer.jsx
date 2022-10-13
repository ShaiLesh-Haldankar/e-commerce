import React from "react";
import "./footer.scss";
export default function Footer() {
  return (
    <footer className="footer px-5 py-4">
      <div className="footer-content">
        <h2>Footer Text</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div>
          {socialMedia.map((icon) => (
            <button>
              <img height="22" width="22" src={icon} />
            </button>
          ))}
        </div>
      </div>
      <div className="footer-label">
        <p>Copyright @2121</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
    </footer>
  );
}
const socialMedia = [
  "https://img.icons8.com/ios-glyphs/60/d9d9d9/facebook-new.png",
  "https://img.icons8.com/ios-glyphs/60/d9d9d9/instagram-new.png",
  "https://img.icons8.com/ios-glyphs/60/d9d9d9/linkedin-circled--v1.png",
  "https://img.icons8.com/ios-glyphs/60/d9d9d9/youtube-play.png",
];

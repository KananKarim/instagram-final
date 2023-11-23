import React from "react";
import "./PrivateFooter.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function PrivateFooter() {

  let history = useHistory()


  return (
    <>
      <div className="footer">
        <div className="footer_info-first">
          <p className="text">
            Instagram is a global sharing platform that you can create posts and view other users posts: <br />
            We are Connecting you with Digital life.
          </p>
        </div>
        <div className="footer_info-second">
<h3>Platform</h3>
<ul>
  <li onClick={() => history.push('/message')}>Messenger</li>
  <li onClick={() => history.push('/discover')}>Discovery</li>
</ul>
        </div>
        <div className="footer_info-forth">
          <h3>Stay in the loop</h3>
          <p>Join our mailing list to stay in the loop with our newest for News</p>
          <span className="button">
            <input type="email" placeholder="Enter your email address"/>
            <button>Subscibe Now</button>
          </span>
        </div>
      </div>
      <div className="copyright">
      © 2023 Instagram
      </div>
      
    </>
  );
}

export default PrivateFooter;
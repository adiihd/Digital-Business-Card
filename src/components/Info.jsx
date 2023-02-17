import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} />;

export default function Info() {
  return (
    <div className="profile--frame">
      <div className="profile--info">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQEL-lYnmDmCFA/profile-displayphoto-shrink_800_800/0/1638378933200?e=1681948800&v=beta&t=wDGhQ_UxEMXo_n5piFvxgB4fSZaK_AHqoZ57m2Wm5e8"
          alt="My Profile Picture"
          className="profile--img"
        />
        <h1 className="profile--name">Adrian Chirculescu</h1>
        <h3 className="profile--title">Frontend Developer</h3>
        <h4 className="profile--site">adrian-c.dev</h4>
      </div>
      <div className="profile--buttons">
        <a href="mailto:adrianchirculescu@gmail.com">
          <button className="btn email">
            {envelope}
            Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/adrian-chirculescu-134867105/"
          target="_blank"
        >
          <button className="btn linkedin">{linkedin}LinkedIn</button>
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';

const twitter = <FontAwesomeIcon icon={faSquareTwitter} size="3x" />;
const facebook = <FontAwesomeIcon icon={faSquareFacebook} size="3x" />;
const instagram = <FontAwesomeIcon icon={faSquareInstagram} size="3x" />;
const github = <FontAwesomeIcon icon={faSquareGithub} size="3x" />;

export default function Footer() {
  return (
    <div className="footer--content">
      <div className="icon">{twitter}</div>
      <div className="icon">{facebook}</div>
      <div className="icon">{instagram}</div>
      <div className="icon">{github}</div>
    </div>
  );
}

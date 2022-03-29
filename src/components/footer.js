import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Monitor Service by <Link to="https://uptimerobot.com/" text="UptimeRobot" /> API, Interval: 5 minutes</p>
        <p>&copy; 2022 <Link to="https://code004accepted.github.io" text="Ender's Blog" /></p>
      </div>
    </div>
  );
}

export default Footer;

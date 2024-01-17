// create dashboard page component
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {}, []);
  return (
    <footer id="footer">
      <div className="footer">
        <a href="/FAQ">FAQ-CourtierXpert.com</a>
        <a href="/aboutus">About US</a>
        <a href="/user-form">Contact US</a>
        <a href="/terms&conditions">Terms & Conditions</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;

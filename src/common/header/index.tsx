// create dashboard page component
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import logowhite from "../../assets/images/logo-white.svg";
import logoblack from "../../assets/images/logo-black.svg";
import { ROUTES } from "../../core/constants/routes";
import { ToastContainer, toast } from "react-toastify";
import FAQ from "../../pages/FAQ";
import { Menu } from "../../components/Menu/Menu";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<any>();
  const [getMenu, setMenu] = useState<any>();

  // Home burger menu
  const [isActive, setIsActive] = useState(false);
  const [getToken, setToken] = useState<any>();
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const [scrolling, setScrolling] = useState(false);
  const { t } = useTranslation();
  const handleLogoutClick = async () => {
    localStorage.removeItem("leadObj");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsActive(!isActive);
    navigate(ROUTES.HOME);
  };

  const handleInstallClick = () => {
    console.log(deferredPrompt);

    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    } else {
      toast.warn("Application is already installed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleRoutes = (route: string) => {
    setIsActive(!isActive);
    switch (route) {
      case ROUTES.FAQ:
        navigate(ROUTES.FAQ);
        break;
      case ROUTES.ABOUTUS:
        navigate(ROUTES.ABOUTUS);
        break;
      case ROUTES.TERMS_CONDITIONS:
        navigate(ROUTES.TERMS_CONDITIONS);
        break;
      case ROUTES.PRIVATE_POLICY:
        navigate(ROUTES.PRIVATE_POLICY);
        break;
      case ROUTES.CONTACT_US:
        navigate(ROUTES.CONTACT_US);
        break;
    }
  };

  const handleLangaugeMenuClick = () => {
    if (getMenu) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    const element: any = document.getElementById("header");
    if (element) {
      element.classList.add("header-bk");
    }
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    // setToken(localStorage.getItem('token'))
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      const scrollY = window.scrollY;
      // Define thresholds for adding and removing classes
      const addClassThreshold = 10;
      const removeClassThreshold = 20;

      // Update the state based on the scroll position
      setScrolling(scrollY > addClassThreshold);
    };
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts
  return (
    <header
      id="header"
      className={`header-sec header-bk ${scrolling ? "onscroll" : "scroll"}`}
    >
      <div className="container">
        <div className="custom-row">
          <div className="logo-block-left">
            <Link to="/">
              <img
                className="whitelogo"
                src={logowhite}
                alt="logo"
                width="322"
                height="77"
              />
              <img
                className="blacklogo"
                src={logoblack}
                alt="logo"
                width="322"
                height="77"
              />
            </Link>
          </div>

          <div className="menu-block-right">
            <div className="home-burger-menu">
              <div
                className={isActive ? "is-active" : ""}
                onClick={toggleClass}
              >
                <span className="homeburger-title">{t("MENU")}</span>
                <div className="homeburger-line">
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className={isActive ? "active munu-block" : "munu-block"}>
              <ul>
                <li>
                  <div className="menu-link" onClick={handleInstallClick}>
                    {t("Install App")}
                  </div>
                </li>
                <li>
                  <div
                    className="menu-link"
                    onClick={() => handleRoutes(ROUTES.FAQ)}
                  >
                    {t("FAQ")}
                  </div>
                </li>
                <li>
                  <div
                    className="menu-link"
                    onClick={() => handleRoutes(ROUTES.ABOUTUS)}
                  >
                    {t("About Us")}
                  </div>
                </li>
                <li>
                  <div
                    className="menu-link"
                    onClick={() => handleRoutes(ROUTES.TERMS_CONDITIONS)}
                  >
                    {t("T&C")}
                  </div>
                </li>
                <li>
                  <div
                    className="menu-link"
                    onClick={() => handleRoutes(ROUTES.CONTACT_US)}
                  >
                    {t("contact_us")}
                  </div>
                </li>
                {/* <li>
                <div className="menu-link"
                   onClick={() => handleRoutes(ROUTES.PRIVATE_POLICY)} >
                    Privacy Policy
                  </div>
                </li> */}
                {getToken && (
                  <li>
                    <hr></hr>

                    <div className="menu-link" onClick={handleLogoutClick}>
                      {t("Logout")}
                    </div>
                  </li>
                )}
                <li>
                  <Menu setMenu={setMenu} onClick={handleLangaugeMenuClick} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

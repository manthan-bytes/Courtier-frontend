// create dashboard page component
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import logowhite from "../../assets/images/logo-white.svg";
import logoblack from "../../assets/images/logo-black.svg";
import { ROUTES } from "../../core/constants/routes";
import { debug } from "console";

const Header = () => {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<any>();
  // Home burger menu
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const [scrolling, setScrolling] = useState(false);

  const handleLogoutClick = async () => {
    localStorage.removeItem('leadObj');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setIsActive(!isActive);
    navigate(ROUTES.HOME)
    
  }


  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  useEffect(() => {
    console.log('tesm')
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);



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

    // const handleBeforeInstallPrompt = (e: any) => {
    //   console.log("🚀 ~ file: index.tsx:62 ~ handleBeforeInstallPrompt ~ e:", e)
    //   e.preventDefault();
    //   setDeferredPrompt(e);
    // };

    // window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // return () => {
    //   window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    // };


    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };

    

    // const handleBeforeInstallPrompt = (e:any) => {
    //   // Prevent the default prompt
    //   e.preventDefault();
    //   // Store the event for later use
    //   setDeferredPrompt(e);
    // };

    // // Add the event listener
    // window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // // Clean up the event listener when the component is unmounted
    // return () => {
    //   window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    // };

  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <header id='header'
      className={`header-sec header-bk ${scrolling ? "onscroll" : "scroll"}`}
    >
      <div className="container">
        <div className="custom-row">
          <div className="logo-block-left">
            <Link to="#">
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
                <span className="homeburger-title">MENU</span>
                <div className="homeburger-line">
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div
            className={isActive ? "active munu-block" : "munu-block"}>
              <ul>
                <li>
                  <div className="menu-link" onClick={handleLogoutClick}>Logout</div>
                </li>
                {/* <li>
                  <div className="menu-link" onClick={handleInstallClick} >App</div>
                </li> */}
              </ul>
            </div>
          
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

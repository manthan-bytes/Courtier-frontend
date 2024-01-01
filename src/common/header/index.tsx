// create dashboard page component
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import logowhite from "../../assets/images/logo-white.svg";
import logoblack from "../../assets/images/logo-black.svg";
import { ROUTES } from "../../core/constants/routes";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<any>();
  // Home burger menu
  const [isActive, setIsActive] = useState(false);
  const [getToken, setToken]= useState<any>();
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
    console.log(deferredPrompt);
    
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
    else{
      toast.warn('Application is already installed', {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  };

  useEffect(() => {
    console.log('tesm')
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    // setToken(localStorage.getItem('token'))
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };

    
  }, []);

  useEffect(() => {

    setToken(localStorage.getItem('token'))

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
                {getToken &&   <li>
                  <div className="menu-link" onClick={handleLogoutClick}>Logout</div>
                </li>}
              
                <li>
                  <div className="menu-link" onClick={handleInstallClick} >Install App</div>
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

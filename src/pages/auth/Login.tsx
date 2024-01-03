// create login page component
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import "./Login.scss";
import bg_main from "../../assets/images/bg-main.jpg";
import banner1 from "../../assets/images/banner1.jpg";
import { TEXT } from "../../core/constants/headingText";
import anime from "animejs/lib/anime.es.js";

import { VolumeMute, VolumeOn, Googleicon } from "../../core/icons";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { createUser } from "../../service/login.service";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  // state for email and password
  const [profile, setProfile] = useState([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const login = useGoogleLogin({
    onSuccess: (codeResponse:any) => {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
        headers: {
          Authorization: `Bearer ${codeResponse.access_token}`,
          Accept: 'application/json'
        }
      })
      .then(async (res) => {
        setProfile(res.data);
        const userObj = {
          name: res.data.name,
          email: res.data.email,
        }
        await saveUser(userObj, codeResponse.access_token);
       
      })
      .catch((err) => console.log(err));
    },
    onError: (error) => {console.log('Login Failed:', error)}
  });


  // submit handler
  const submitHandler = async () => {
  await login();
  };

  const saveUser = async (userObj:any, token: string) => {
    const user = await createUser(userObj);

    if (user.statusCode === 400) {
      toast.info(user.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem('token', token)
      localStorage.setItem('email', userObj.email)
      setTimeout(() => {
        navigate("/buysellproperty");

      },500)
    }
    else if (user.statusCode === 201) {
      toast.success(user.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem('token', token)
      localStorage.setItem('email', userObj.email)
      setTimeout(() => {
        navigate("/buysellproperty");
      },500)
    } else {

    }
 
   
    // navigate("/buysellproperty");
  }

  // typeing js title
  useEffect(() => {
    anime({
      targets: ".ml6 .letter",
      translateY: "30px",
      opacity: 1,
      delay: function (el, index) {
        return index * 50;
      },
      direction: "normal",
      loop: false,
    });
  }, [anime]);
  const element:any = document.getElementById("header");
    if (element) {
      element.classList.add('header-bk')
    }
  // Banner typed js hide
  const [showDiv, setShowDiv] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Hide the div after 5000 milliseconds (5 seconds)
      setShowDiv(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
  }, []);

  function loginAsGuest(): void {
    localStorage.setItem('loginasGuest', 'true');
    navigate("/buysellproperty");
  }

  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-6 mt-5 mx-auto">
    //       <form onSubmit={submitHandler}>
    //         <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
    //         <div className="form-group">
    //           <label htmlFor="email">Email Address</label>
    //           <input type="text" className="form-control" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="password">Password</label>
    //           <input type="password" className="form-control" name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //         </div>
    //         <ButtonSubmit title="Login" disabled={false} />
    //       </form>
    //       <Link to="/register">Register</Link>
    //     </div>
    //   </div>
    // </div>

    <section className={`main-banner-sec login-sec ${ newClass ? "next-class" : "" }`}>
      <div className="banner-overlay"></div>
      <img
        className="banner-bg"
        src={bg_main}
        alt="banner img"
        width="1920"
        height="1080"
      />
      <div className="banner-cantent-block">
        <div className="container">
          <div className="custom-row">
            <div className="login-block">
              <h2 className="h2">{TEXT.login_to_continue}</h2>
              <form>
              <label className="custom-select">
                <div onClick={submitHandler} className="theme_btn">
                  <Googleicon />
                  {TEXT.continue_with_google}
                </div>
                {/* <ButtonSubmit title="Login" disabled={false} /> */}
              </label>
              <label className="custom-select">
                <div onClick={()=>loginAsGuest()} className="theme_btn">
                  {TEXT.continue_as_guest}
                </div>
                {/* <ButtonSubmit title="Login" disabled={false} /> */}
              </label>
              {/* <span className="error-msgv error-msg ">Oops! not correct mobile number</span> */}
              </form>
            </div>
            {/* <div className="volume-btn">
              <div className="volume volumeoff">
                <VolumeMute />
              </div>
              <div className="volume volumeon">
                <VolumeOn />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {showDiv && (
        <div
          className="banner-typed"
          id="hidetyped"
          style={{ transition: "opacity 5s", opacity: showDiv ? 1 : 0 }}
        >
          <img
            className="banner-img"
            src={banner1}
            alt="banner img"
            width="1920"
            height="1080"
          />
          <div className="container">
            <div className="banner-typed-content">
              <div className="ml6 animated-typed">
                <span className="letters h1">
                  {TEXT.typed_animated.split("").map(function (char, index) {
                    return (
                      <span className="letter" aria-hidden="true" key={index}>
                        {char}
                      </span>
                    );
                  })}
                </span>
              </div>
              {/* <div className="volume-btn"> */}
                {/* <div className="volume volumeoff">
                  <VolumeMute />
                </div>
                <div className="volume volumeon">
                  <VolumeOn />
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;

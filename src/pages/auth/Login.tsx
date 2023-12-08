// create login page component
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/features/AuthSlice";
import { useAppDispatch } from "../../store/store";
import "./Login.scss";
import ButtonSubmit from "../../components/Button/ButtonSubmit";
import bg_main from "../../assets/images/bg-main.jpg";
import banner1 from "../../assets/images/banner1.jpg";
import { TEXT } from "../../core/constants/headingText";
import anime from "animejs/lib/anime.es.js";

import { VolumeMute, VolumeOn, Googleicon } from "../../core/icons";

const Login = () => {
  // state for email and password
  const [username, setUsername] = useState<string>("kminchelle");
  const [password, setPassword] = useState<string>("0lelplR");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // submit handler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    localStorage.setItem("token", "1234");
    navigate("/buysellproperty");
    // e.preventDefault();
    // dispatch(login({ username: username, password: password })).then((response: any) => {
    //   localStorage.setItem('token', response.payload.token);
    //   navigate('/buysellproperty');
    // }).catch((err: any) => {
    //   console.log('Login submit err', err);
    // });
  };

  // typeing js title
  useEffect(() => {
    anime({
      targets: ".ml6 .letter",
      translateY: "30px",
      opacity: 1,
      delay: function (el, index) {
        return index * 80;
      },
      direction: "normal",
      loop: false,
    });
  }, [anime]);

  // Banner typed js hide
  const [showDiv, setShowDiv] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Hide the div after 5000 milliseconds (5 seconds)
      setShowDiv(false);
    }, 7500);
    return () => clearTimeout(timeoutId);
  }, []);

  // banner slide animation js
  const [newClass, setNewClass] = useState(false);
  useEffect(() => {
    setNewClass(true);
  }, []);

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
              <h2 className="h2">Login to Continue</h2>
              <form onSubmit={submitHandler}>
              <label className="custom-select">
                <Link to="/register" className="theme_btn">
                  <Googleicon />
                  Continue with Goolge
                </Link>
                <ButtonSubmit title="Login" disabled={false} />
              </label>
              </form>
            </div>
            <div className="volume-btn">
              <div className="volume volumeoff">
                <VolumeMute />
              </div>
              <div className="volume volumeon">
                <VolumeOn />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDiv && (
        <div
          className="banner-typed"
          id="hidetyped"
          style={{ transition: "opacity 1.5s", opacity: showDiv ? 1 : 0 }}
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
              <div className="volume-btn">
                <div className="volume volumeoff">
                  <VolumeMute />
                </div>
                <div className="volume volumeon">
                  <VolumeOn />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;

import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import MaterialIcons from "../../components/MaterialIcons";
import LinkButton from "../../components/Button/LinkButton";
import routes from "../../routes";
import defaultNavLinks from "../../utils/navigation";
import GlobalContext from "../../Context/GlobalContext";
import favicon, { eventImg } from "../../utils/images";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const vh = window.innerHeight / 100;
  const { theme, setSideBarLinks, breakpoint } = useContext(GlobalContext);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 25 * vh) setScrolled(true);
      else setScrolled(false);
    });
    setSideBarLinks(defaultNavLinks);

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, [setSideBarLinks, vh]);

  return (
    <main className="home">
      <div className="card">
        <div className="card-frame" data-aos="fade-in" data-aos-duration={2000}>
          <div className="card-box">
            <div className="home-box-title">
              <span className="home-box-title__text">
                <h4 style={{ textAlign: 'center', marginBottom: '2rem', fontStyle: 'Google Sans', color: 'red' }}>
                  Welcome to <LinkButton to="/events"><u>Online Event Planner</u></LinkButton>
                </h4>
              </span>
            </div>
            <div className="home-box-head" data-aos="zoom-out">
              <div className="home-box-image" style={{ backgroundImage: `url(${eventImg})` }}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

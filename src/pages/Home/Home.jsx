import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import MaterialIcons from "../../components/MaterialIcons";
import LinkButton from "../../components/Button/LinkButton";
import routes from "../../routes";
import defaultNavLinks from "../../utils/navigation";
import GlobalContext from "../../Context/GlobalContext";
import favicon, { eventImg } from "../../utils/images";
import { catererData } from "../../Caterers.mjs"; // Import catererData from Caterers.mjs

const Home = () => {
  console.log("catererData: ", catererData)
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
                <h4 style={{ textAlign: 'center', marginBottom: '2rem', fontStyle: 'cursive', color: 'red' }}>
                  Welcome to Online Event Planner
                </h4>
              </span>
            </div>
            <div className="home-box-head" data-aos="zoom-out">
              <div className="home-box-image" style={{ backgroundImage: `url(${eventImg})` }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="caterer-list">
        <h2>Caterers</h2>
        <ul>
          {catererData.map(caterer => (
            <li key={caterer._id}>
              <h3>{caterer.CatererName}</h3>
              <p>Location: {caterer.Location}</p>
              <p>Starting Price: {caterer.StartingPrice}</p>
              <p>Contact: {caterer.Contact}</p>
              <p>Webpage: <a href={caterer.Webpage}>{caterer.Webpage}</a></p>
              <p>Review: {caterer.Review}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;



/** import React, { useContext, useEffect, useState } from "react";
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
				<div
					className="card-frame"
					data-aos="fade-in"
					data-aos-duration={2000}
				>
					<div
						className="card-box"
					>
						<div className="home-box-title">
								<span className="home-box-title__text">
									<h4 style={{textAlign : 'center',
    								marginBottom: '2rem',
									fontStyle: 'cursive',
									color: 'red'}}>
										Welcome to {catererData}</h4>
										{routes.map((route, index) => (
										<LinkButton to={route.route}>
										<span style={{textDecoration : 'underline'}}>Online Event Planner </span>
									</LinkButton>
										))}
								</span>
							</div>
						<div className="home-box-head" data-aos="zoom-out">
							<div
								className="home-box-image"
								style={{
									backgroundImage: `url(${eventImg})`,
								}}
							>
							
							</div>
							
						</div>
					</div>
				</div>
			</div>
			{/* <div className="home-navigation">
				<div className="row">
					{routes.map((route, index) => (
						<div
							className="col-lg-100 col-md-100 col-sm-100"
							key={index}
						>
							<div
								className="home-navigation-card"
								style={{
									flexFlow: breakpoint("mobile")
										? "column"
										: index % 2
										? "row-reverse"
										: "row",
									backgroundColor: `var(--${route.color}-${
										theme === "light" ? "100" : "700"
									})`,
								}}
							>
								<div
									className="home-navigation-card-image"
									style={{
										backgroundImage: `url(${route.poster})`,
									}}
								></div>
								<div className="home-navigation-card-content">
									<span className="home-navigation-card-content__title">
										{route.title}
									</span>
									<span className="home-navigation-card-content__about">
										{route.about}
									</span>
									<LinkButton to={route.route}>
										<span>{route.navTitle}</span>
										<MaterialIcons>
											north_east
										</MaterialIcons>
									</LinkButton>
								</div>
							</div>
						</div>
					))}
				</div>
			</div> /*}
		</main>
	);
};

export default Home;*/

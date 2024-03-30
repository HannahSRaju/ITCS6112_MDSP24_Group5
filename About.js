import React from "react";
import favicon from "../../utils/images";
import { catererData } from 'Caterers.mjs'; // Assuming Caterers.mjs provides catererData
import "./about.css";
/** const About = () => {
    return (
        <main className="about">
            <section className="about-head">
                <div className="about-head-image">
                    <img src={favicon} alt="Planner" />
                </div>
                <div className="about-head-content">
                    <span className="about-head-content__title">Event Planner</span>
                    <span className="about-head-content__p">
                        Get more done with Event Planner. Event planning made effortless.
                    </span>
                </div>
            </section>
            <section className="about-body">
                <h1>Caterers</h1>
                <ul>
                    {catererData.map(caterer => (
                        <li key={caterer._id}>
                            <h2>{caterer.CatererName}</h2>
                            <p>Location: {caterer.Location}</p>
                            <p>Starting Price: {caterer.StartingPrice}</p>
                            <p>Contact: {caterer.Contact}</p>
                            <p>Webpage: <a href={caterer.Webpage}>{caterer.Webpage}</a></p>
                            <p>Review: {caterer.Review}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};/*
            <section className="about-body">
                <span>
                    Organize your Calendar, events, notes and tasks with
                    Planner.
                </span>
                <span>
                    Add an event to remind you on a birthday, anniversary or
                    your traditional festival etc.
                </span>
                <span>
                    Quickly capture what's on your mind and write it down in
                    Notes for seeing it anytime.
                </span>
                <span>
                    Share your thoughts easily with your family, friends and
                    colleagues.
                </span>
                <span>Capture and write in tasks to remind you later on.</span>
            </section>
            

export default About;*/

/** import React from "react";
import favicon from "../../utils/images";
import "./about.css";

const About = () => {
	return (
		<main className="about">
			<section className="about-head">
				<div className="about-head-image">
					<img src={favicon} alt="Planner" />
				</div>
				<div className="about-head-content">
					<span className="about-head-content__title">Event Planner</span>
					<span className="about-head-content__p">
						Get more done with Event Planner. Event planning made effortless.
					</span>
				</div>
			</section>
			<section className="about-body">
				<span>
					Event Planner is a web application to help users plan the best
					events possible.
				</span>
			</section>
			
			{/** 
			<section className="about-body">
				<span>
					Organize your Calendar, events, notes and tasks with
					Planner.
				</span>
				<span>
					Add an event to remind you on a birthday, anniversary or
					your traditional festival etc.
				</span>
				<span>
					Quickly capture what's on your mind and write it down in
					Notes for seeing it anytime.
				</span>
				<span>
					Share your thoughts easily with your family, friends and
					colleagues.
				</span>
				<span>Capture and write in tasks to remind you later on.</span>
			</section>
			}
		</main>
	);
};

export default About; **/

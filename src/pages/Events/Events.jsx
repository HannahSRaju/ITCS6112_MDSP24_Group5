import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import Fab from "../../components/Button/Fab";
import Empty from "../../components/Empty/Empty";
import GlobalContext from "../../Context/GlobalContext";
import Row, { Col } from "../../Layout/Responsive";
import AddEvent from "./AddEvent";
import Event from "./Event";
import "./events.css";
import { eventsNavLinks } from "../../utils/navigation";
import { nullEvents, eventsBKG } from "../../utils/images";

const Events = () => {
	const { events, setSideBarLinks } = useContext(GlobalContext);
	const [eventsToRender, setEventsToRender] = useState([]);
	const [showAddEventBox, setShowAddEventBox] = useState(false);
	useEffect(() => {
		setSideBarLinks(eventsNavLinks);
	}, [setSideBarLinks]);
	useEffect(() => {
		let allEvents = [...events];
		let newEvents = allEvents
			.map((ev) => ({
				...ev,
				date: new Date(ev.date),
			}))
			.sort((a, b) => b.date - a.date);
		let m1 = new Map();
		for (let event of newEvents) {
			let presentDate = `${moment(event.date).format("MMMM YYYY")}`;
			let a = m1.get(presentDate);
			if (!event.trashed) {
				if (!a) m1.set(presentDate, [event]);
				else m1.set(presentDate, [...a, event]);
			}
		}
		let newArr = [
			'Wedding', 'Birthday', 'Sports', 'Corporate Event'
		];
		// for (const [key, value] of m1) {
		// 	newArr = [
		// 		...newArr,
		// 		{
		// 			month: key,
		// 			eventsOfMonth: value,
		// 		},
		// 	];
		// }
		setEventsToRender(newArr);
	}, [events]);

	return (
		<main className="events">
			{eventsToRender.length > 0 ? (
				<>
					<section className="events-head">
						<span>Events </span>
					</section>
					<section className="events-body">
					<div className="background-image" style={{ backgroundImage: `url(${eventsBKG})` }}></div>
						{
							<div className="events-body-section">
								<div className="events-body-section__body">

									<Col

									>
										<Event />
									</Col>
								</div>
							</div>
						}
					</section>
				</>
			) : (
				<Empty
					img={nullEvents}
					text="No Event Yet"
					cta={{
						text: "Add an Event",
						icon: "add",
						action: () => setShowAddEventBox(true),
					}}
				/>
			)}
			{/*<Fab icon="add" onClick={() => setShowAddEventBox(true)} />
			{showAddEventBox && (
				//<AddEvent close={() => setShowAddEventBox(false)} />
			)}*/}
		</main>
	);
};

export default Events;

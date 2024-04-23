import moment from "moment";
import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import IconButton from "../../components/Button/IconButton";
import Chip from "../../components/Chip/Chip";
import MaterialIcons from "../../components/MaterialIcons";
import GlobalContext from "../../Context/GlobalContext";
import Popup from "../../Layout/Popup/Popup";
import EventPopup from "./EventPopup";
import { oneBgImg, eventImg, sportsImg, corporateImg, birthdayImg } from "../../utils/images";

const Event = ({
	title,
	description,
	date,
	time,
	type,
	link,
	trashed
}) => {
	const navigate = useNavigate();
	const { theme, moveEventToTrash, restoreEventFromTrash, deleteEvent } =
		useContext(GlobalContext);
const showIcon = (e) => {
		switch (e) {
			case "birthday":
				return "cake";
			case "anniversary":
				return "cake";
			case "meeting":
				return "group";
			case "festival":
				return "festival";
			case "ceremony":
				return "celebration";
			default:
				return "event";
		}
	};
	const getColor = (e) => {
		switch (e) {
			case "birthday":
				return "blue";
			case "anniversary":
				return "pink";
			case "meeting":
				return "indigo";
			case "festival":
				return "purple";
			case "ceremony":
				return "green";
default:
				return "bgcolor";
		}
	};
	const [openEventPopup, setOpenEventPopup] = useState(false);
	const [openTrashPopup, setOpenTrashPopup] = useState(false);
	const [popupCta, setPopupCta] = useState({
		text: "Move to Trash",
		color: "red",
		icon: "delete",
		onClick: () => {
			setOpenTrashPopup(false);
		},
	});
const [popupContent, setPopupContent] = useState(
		<>
			Move the event{" "}
			<Chip text={title} size="small" color={getColor(type)} /> to Trash
			Bin?
		</>
);

const stringArray = [
    { name: 'Wedding', route: '/wedding' },
    { name: 'Birthday', route: '/birthday' },
    { name: 'Sports', route: '/sports' },
    { name: 'Corporate', route: '/corporate' },
  ];

	return (
		<div
		>
			{stringArray.map((user, index) => (
        <div className="event" key={index}>
          <div onClick={() => setOpenEventPopup(true)}>
            <div className="event-details" style={{ backgroundImage: `url(${user.name === 'Wedding' ? oneBgImg : (user.name === 'Birthday' ? birthdayImg : (user.name === 'Sports' ? sportsImg : (user.name === 'Corporate' ? corporateImg : '')))}`, backgroundSize: 'cover'}}>
              <div className="event-details__title" onClick={() => navigate(user.route)}>
                {user.name}
              </div>
            </div>
          </div>
        </div>
      ))}
		</div>
	);
};

export default Event;

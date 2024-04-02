import React, { useContext, useState } from "react";
import Input, { TextArea } from "../Input/Input";
import Button from "../Button/Button";
import emailjs from "emailjs-com";
import "./footer.css";
import { GitHub, Linkedin, Mail } from "react-feather";
import GlobalContext from "../../Context/GlobalContext";
import favicon, { waves } from "../../utils/images";
import LinkButton from "../../components/Button/LinkButton";
import { Link } from 'react-router-dom';

const Footer = () => {
	const { theme, accentColor, setOpenSnackBar, setSnack } =
		useContext(GlobalContext);
	const [userMessage, setUserMessage] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [imgClicked, setImgClicked] = useState(false);
	const c = (x) => Math.cos((Math.PI * x) / 180);
	const s = (x) => Math.sin((Math.PI * x) / 180);
	const pos = (x) => `translate( ${r * c(x)}rem, ${r * s(x)}rem)`;
	const r = 7;
	const socials = [
		{
			username: "akshatmittal2506@gmail.com",
			link: "mailto:akshatmittal2506@gmail.com",
			icon: <Mail />,
			angle: -90,
		},
		{
			username: "@akshatmittal61",
			link: "https://www.linkedin.com/in/akshatmittal61",
			icon: <Linkedin />,
			angle: -30,
		},
		{
			username: "@akshatmittal61",
			link: "https://www.github.com/akshatmittal61",
			icon: <GitHub />,
			angle: 30,
		},
		{
			username: "snehasharma9205@gmail.com",
			link: "mailto:snehasharma9205@gmail.com",
			icon: <Mail />,
			angle: 90,
		},
		{
			username: "@snehasharma1111",
			link: "https://www.linkedin.com/in/snehasharma1111",
			icon: <Linkedin />,
			angle: 150,
		},
		{
			username: "@snehasharma1111",
			link: "https://www.github.com/snehasharma1111",
			icon: <GitHub />,
			angle: 210,
		},
	];
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserMessage((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE,
				process.env.REACT_APP_TEMPLATE,
				e.target,
				process.env.REACT_APP_USER
			)
			.then((res) => console.info(res))
			.catch((err) => console.error(err));
		setSnack({
			text: "Your message has been sent",
			bgColor: "var(--green)",
			color: "var(--white)",
		});
		setOpenSnackBar(true);
		setTimeout(() => {
			setOpenSnackBar(false);
		}, 5000);
		setUserMessage({
			name: "",
			email: "",
			message: "",
		});
	};
	const handleReset = (e) => {
		e.preventDefault();
		setUserMessage({
			name: "",
			email: "",
			message: "",
		});
	};
	return (
		<footer
			className="footer"
			style={{
				backgroundImage: `url(${
					waves[accentColor][theme === "light" ? 0 : 1]
				})`,
				backgroundColor: "lavender"
			}}
		>
			<div className="footer-center">
				<div className="footer-center-feedback">
					<h2 style={{
						color: 'darkcyan',
						fontSize: 'xx-large',
						marginBottom: '20px', // Adding space between the heading and link
						textAlign: 'center' // Centering the heading
					}}> Want us to plan your event? </h2>
					<div style={{ textAlign: 'center' }}> {/* Centering the link */}
						<a href="https://forms.gle/EXPKavkpmwYSj4H67" target="_blank">
							<u>Request Event Plan</u>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
	
};

export default Footer;

import axios from "axios";
import { useState } from "react";
import { omit } from "../utils";
import defaultNavLinks from "../utils/navigation";

export const useContextData = () => {
	// Axios Instance Configurations
	const axiosInstance = axios.create({
		baseURL: "http://localhost:5000/",
		headers: {
			"x-auth-token": localStorage.getItem("token"),
			"Content-Type": "application/json",
		},
	});

	// Network Status
	const [networkStatus, setNetworkStatus] = useState("offline");

	// Loading State
	const [isLoading, setIsLoading] = useState(false);

	// Snack Bar component
	const [snack, setSnack] = useState({
		text: "Snackbar Message",
		bgColor: "var(--indigo)",
		color: "var(--white)",
	});
	const [openSnackBar, setOpenSnackBar] = useState(false);

	// Global Authentication State
	const isLocalAuthenticated = localStorage.getItem("isAuthenticated");
	const [isAuthenticated, setIsAuthenticated] = useState(
		JSON.parse(isLocalAuthenticated) || false
	);

	// Global User State
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const updateUser = (newUser) => {
		localStorage.setItem(
			"user",
			JSON.stringify(omit({ ...user, ...newUser }, "password"))
		);
		setUser((p) => ({ ...p, ...newUser }));
	};

	// Events
	const [events, setEvents] = useState([]);
	const getAllEvents = async () => {
		try {
			setIsLoading(true);
			const res = await axiosInstance.get("/api/events");
			setEvents(() => res.data.allEvents);
			setIsLoading(false);
		} catch (error) {
			setSnack({
				text: error.response?.data?.message,
				bgColor: "var(--red)",
				color: "var(--white)",
			});
			setOpenSnackBar(true);
			setTimeout(() => {
				setOpenSnackBar(false);
			}, 5000);
			setIsLoading(false);
		}
	};
	const addNewEvent = async (newEvent) => {
		try {
			setIsLoading(true);
			const res = await axiosInstance.post("/api/events/add", {
				...newEvent,
			});
			if (res.status === 200) {
				setSnack({
					text: res.data.message,
					bgColor: "var(--green)",
					color: "var(--white)",
				});
				setEvents((prevEvents) => {
					return [...prevEvents, res.data.newEvent];
				});
				setOpenSnackBar(true);
				setTimeout(() => {
					setOpenSnackBar(false);
				}, 5000);
				setIsLoading(false);
			}
		} catch (error) {
			setSnack({
				text: error.response?.data?.message,
				bgColor: "var(--red)",
				color: "var(--white)",
			});
			setOpenSnackBar(true);
			setTimeout(() => {
				setOpenSnackBar(false);
			}, 5000);
			setIsLoading(false);
		}
	};
	const updateOneEvent = async (id, updatedEvent) => {
		try {
			setIsLoading(true);
			const resp = await axiosInstance.put(`/api/events/edit/${id}`, {
				...updatedEvent,
			});
			setEvents((prevEvents) => {
				let newEvents = prevEvents.map((singleEvent) =>
					singleEvent._id !== id
						? singleEvent
						: resp.data.updatedEvent
				);
				return newEvents;
			});
			setIsLoading(false);
		} catch (error) {
			setSnack({
				text: error.response?.data?.message,
				bgColor: "var(--red)",
				color: "var(--white)",
			});
			setOpenSnackBar(true);
			setTimeout(() => {
				setOpenSnackBar(false);
			}, 5000);
			setIsLoading(false);
		}
	};

	// Side Bar
	const [openSideBar, setOpenSideBar] = useState(false);
	const [sideBarLinks, setSideBarLinks] = useState(defaultNavLinks);
	const toggleSideBar = () => {
		setOpenSideBar((p) => !p);
	};

	// Theme: light || dark
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);
	const toggleTheme = () => {
		document.body.classList = theme === "light" ? "dark" : "light";
		localStorage.setItem("theme", theme === "light" ? "dark" : "light");
		setTheme((p) => (p === "light" ? "dark" : "light"));
	};

	// Accent Color (Featured Update)
	const [accentColor, setAccentColor] = useState("indigo");
	const handleAccentColor = (color) => {
		setAccentColor(color);
	};

	// Media Breakpoints
	const mediaQuerySm = window.matchMedia("(max-width: 672px)");
	const mediaQueryMd = window.matchMedia("(max-width: 880px)");
	const mediaQueryLg = window.matchMedia("(min-width: 880px)");
	const breakpoint = (device) => {
		if (device === "mobile") return mediaQuerySm.matches;
		else if (device === "tab") return mediaQueryMd.matches;
		else return mediaQueryLg.matches;
	};
	mediaQuerySm.addListener(breakpoint);
	mediaQueryMd.addListener(breakpoint);
	mediaQueryLg.addListener(breakpoint);

	return {
		theme,
		setTheme,
		toggleTheme,
		accentColor,
		setAccentColor,
		handleAccentColor,
		breakpoint,
		networkStatus,
		setNetworkStatus,
		isLoading,
		setIsLoading,
		snack,
		setSnack,
		openSnackBar,
		setOpenSnackBar,
		isAuthenticated,
		setIsAuthenticated,
		user,
		setUser,
		updateUser,
		openSideBar,
		setOpenSideBar,
		toggleSideBar,
		sideBarLinks,
		setSideBarLinks,
		axiosInstance,
		events,
		setEvents,
		getAllEvents,
		addNewEvent,
		updateOneEvent,
	};
};
import React from "react";
import Cover from "../common/Cover";
import Intro from "./section/Intro";
import Affiliate from "./section/Affiliate";
import Team from "./section/Team";

function About() {
	const about = {
		cover: {
			sec_bg: "/images/image-2.jpg",
			heading: "Get to know us",
			para: "Consulting is a corporate membership organization of management consulting firms which aims to support and strengthen its individual partners market position.",
			btn: "Get a Call Back",
			btn_link: "/contact",
		},
		intro: {
			heading: "We are professional in all ",
			heading_ex: "our dealings",
			subtitle: "All of our services are backed by our 100% satisfaction guarantee.",
			para: "Odit sint debitis soluta perferendis totam aperiam hic eum numquam dolore laboriosam eius id odio commodi, expedita accusamus amet obcaecati ipsum dicta, fuga maxime reiciendis.",
			ul: [
				{
					id: 1,
					li: "Full-service electrical layout, design",
				},
				{
					id: 2,
					li: "Wiring and installation/upgrades",
				},
				{
					id: 3,
					li: "Emergency power solutions (generators)",
				},
				{
					id: 4,
					li: "Virtually any electrical needs you have – just ask!",
				},
			],
			btn: "Contact us",
			btn_link: "/contact",
			src: "/images/06628C88-4A17-45BF-A6F4-1987CA3B446C.jpg",
		},
		affiliate: {
			heading: "How we",
			heading_ex: "support you",
			block: [
				{
					id: 1,
					icon: "/images/icon-roller.svg",
					title: "Host protection programs",
					para: "To support you in the rare event of an incident, most Airbnb bookings include property damage protection and liability insurance of up to $1M USD.",
				},
				{
					id: 2,
					icon: "/images/icon-stats-up.svg",
					title: "Covid-19 safety guidelines",
					para: "To help protect the health of our community, we've partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.",
				},
				{
					id: 3,
					icon: "/images/icon-blackboard.svg",
					title: "High guest standards",
					para: "To give Hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behavior.",
				},
			],
		},
		team: {
			heading: "Team Member",
			block: [
				{
					id: 1,
					title: "August Dueholm",
					subtitle: "Presidents",
					src: "/images/01.jpg",
				},
				{
					id: 2,
					title: "Carl Vinter",
					subtitle: "Co-President",
					src: "/images/02.jpg",
				},
				{
					id: 3,
					title: "Sofus Koba",
					subtitle: "Head of Partner Relations",
					src: "/images/03.jpg",
				},
				{
					id: 4,
					title: "Simone Holm",
					subtitle: "Partner Relations Team",
					src: "/images/04.jpg",
				},
			],
		},
	};
	return (
		<>
			<Cover data={about.cover} btn={true} />
			<Intro data={about.intro} />
			<Affiliate data={about.affiliate} />
			<Team data={about.team} />
		</>
	);
}

export default About;

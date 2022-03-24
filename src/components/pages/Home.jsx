import React from "react";
import Banner from "./section/Banner";
import Intro from "./section/Intro";
import Serve from "./section/Serve";
import Choose from "./section/Choose";
import Assets from "./section/Assets";
import Folio from "./section/Folio";

function Home(props) {
	const home = {
		banner: {
			sec_bg: "/images/mainslide-03.jpg",
			heading: "Trust Our Electrical Team With All Of Your Service Needs",
			para: "We can light everything",
			btn_01: "Learn More",
			btn_link_01: "/about",
			btn_02: "Contact us",
			btn_link_02: "/contact",
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
			btn: "Learn More",
			btn_link: "/about",
			src: "/images/assets-N9JBSFN-1536x1025.jpg",
		},
		serve: {
			heading: "What service are ",
			heading_ex: "we provide",
			block: [
				{
					id: 1,
					src: "/images/services-1.jpg",
					title: "Low Voltage Cabling",
					para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae consectetur eum natus provident? Hic molestiae harum, labore pariatur, sapiente animi blanditiis, alias qui beatae illum quos veniam rem itaque.",
				},
				{
					id: 2,
					src: "/images/services-2.jpg",
					title: "Consult and Design",
					para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla tenetur tempora a, placeat et reprehenderit recusandae! Minima quisquam sequi deserunt suscipit dolorem sint eos hic dolorum, exercitationem ad temporibus placeat.",
				},
				{
					id: 3,
					src: "/images/services-3.jpg",
					title: "Cyber Security",
					para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolorum veniam mollitia facere officia doloribus vitae, pariatur nobis voluptates. Et iusto temporibus ullam odio harum! Soluta accusamus fuga beatae amet!",
				},
			],
		},
		choose: {
			heading: "We are residential & ",
			heading_ex: "commercial electricians",
			block: [
				{
					id: 1,
					icon: "/images/icon-electric.svg",
					title: "Electrical Installation",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 2,
					icon: "/images/icon-bulb.svg",
					title: "Light Installation",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 3,
					icon: "/images/icon-switch.svg",
					title: "Electrical Switches",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 4,
					icon: "/images/icon-wiring.svg",
					title: "Electrical Wiring",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 5,
					icon: "/images/icon-tool.svg",
					title: "Electrical Repair",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
				{
					id: 6,
					icon: "/images/icon-safety.svg",
					title: "Electrical Safety",
					para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				},
			],
		},
		assets: {
			sec_bg: "/images/box01-bg-desktop.jpg",
			heading: "We are qualified and experienced in providing a range of electric services.",
			para: "A video is worth 1.8 million words.",
			btn_img_src: "/images/play_icon.svg",
		},
		folio: {
			heading: "See what ",
			heading_ex: "they're saying",
			para: "We are very proud of the service we provide and stand by every product we carry.",
			block: [
				{
					id: 1,
					src: "/images/01.jpg",
					name: "Sasha Bonds",
					label: "Businesswoman",
					para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At recusandae quia dicta eligendi illo delectus numquam, sit ut nostrum nobis itaque culpa omnis ratione debitis nulla non ex sed dolor?",
				},
				{
					id: 2,
					src: "/images/02.jpg",
					name: "John Wick",
					label: "Businessman",
					para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At recusandae quia dicta eligendi illo delectus numquam, sit ut nostrum nobis itaque culpa omnis ratione debitis nulla non ex sed dolor?",
				},
				{
					id: 3,
					src: "/images/03.jpg",
					name: "Jennifer Kem",
					label: "Businesswoman",
					para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At recusandae quia dicta eligendi illo delectus numquam, sit ut nostrum nobis itaque culpa omnis ratione debitis nulla non ex sed dolor?",
				},
			],
		},
	};
	return (
		<>
			<Banner data={home.banner} />
			<Intro data={home.intro} />
			<Serve data={home.serve} />
			<Choose data={home.choose} />
			<Assets data={home.assets} show={props.popup} />
			<Folio data={home.folio} />
		</>
	);
}

export default Home;

import React from "react";
import Cover from "../common/Cover";
import Service from "./section/Service";
import Serve from "./section/Serve";

function ServiceDetail() {
	const detail = {
		cover: {
			sec_bg: "/images/services-2.jpg",
			heading: "Service Detail",
		},
		service: {
			heading: "Low Voltage Cabling",
			subtitle: "All of our services are backed by our 100% satisfaction guarantee.",
			para: "Odit sint debitis soluta perferendis totam aperiam hic eum numquam dolore laboriosam eius id odio commodi, expedita accusamus amet obcaecati ipsum dicta, fuga maxime reiciendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At recusandae quia dicta eligendi illo delectus numquam, sit ut nostrum nobis itaque culpa omnis ratione debitis nulla non ex sed dolor? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At recusandae quia dicta eligendi illo delectus numquam, sit ut nostrum nobis itaque culpa omnis ratione debitis nulla non ex sed dolor?",
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
				{
					id: 5,
					li: "Full-service electrical layout, design",
				},
				{
					id: 6,
					li: "Wiring and installation/upgrades",
				},
			],
			src: "/images/services-1.jpg",
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
	};
	return (
		<>
			<Cover data={detail.cover} />
			<Service data={detail.service} />
			<Serve data={detail.serve} />
		</>
	);
}

export default ServiceDetail;

import React from "react";
import { Link } from "react-router-dom";
// import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";

function Footer() {
	const data = {
		block_01: {
			title: "Explore",
			list: [
				{
					id: 1,
					text: "About us",
					link: "/about",
				},
				{
					id: 2,
					text: "Reviews",
					link: "/reviews",
				},
				{
					id: 3,
					text: "Contact us",
					link: "/contact",
				},
			],
		},
		block_02: {
			title: "Contact",
			list: [
				{
					id: 1,
					text: "(518) 930-0035",
					link: "tel:(518) 930-0035",
				},
				{
					id: 2,
					text: "info@jcjelectrical.com",
					link: "mailto:info@jcjelectrical.com",
				},
			],
		},
		block_03: {
			title: "Support",
			list: [
				{
					id: 1,
					text: "FAQ's",
					link: "/faq",
				},
				{
					id: 2,
					text: "Privacy Policy",
					link: "/privacy-policy",
				},
				{
					id: 3,
					text: "Terms & conditions",
					link: "/terms-conditions",
				},
				{
					id: 4,
					text: "Disclaimer",
					link: "/disclaimer",
				},
			],
		},
	};
	return (
		<>
			<footer>
				<div className="contain">
					{/* <Newsletter /> */}
					<div className="flex_row main_row">
						<div className="col">
							<div className="in_col">
								<h5 className="fancy">{data.block_01.title}</h5>
								<ul className="list">
									{data.block_01.list.map((val) => {
										return (
											<li key={val.id}>
												<Link to={val.link}>{val.text}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col">
							<div className="in_col">
								<h5 className="fancy">{data.block_02.title}</h5>
								<ul className="list">
									{data.block_02.list.map((val) => {
										return (
											<li key={val.id}>
												<a href={val.link}>{val.text}</a>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col">
							<div className="in_col">
								<h5 className="fancy">{data.block_03.title}</h5>
								<ul className="list">
									{data.block_03.list.map((val) => {
										return (
											<li key={val.id}>
												<Link to={val.link}>{val.text}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col">
							<div className="in_col text-end">
								<SocialLinks />
								<p className="copyright">
									Copyright © 2022 <Link to="/">JCJ Electric LLC.</Link> All rights reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;

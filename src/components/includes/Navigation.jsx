import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation({ active }) {
	const [show, setShow] = useState(false);
	const SubNav = () => {
		setShow(!show);
	};

	return (
		<>
			<nav className="ease">
				<div id="nav" className={active ? "active" : ""}>
					<ul id="lst">
						<li>
							<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
								About
							</NavLink>
						</li>
						<li className="drop">
							<a onClick={() => SubNav(show)}>Services</a>
							<ul className={show ? "sub active" : "sub"}>
								<li>
									<Link to="/service-detail">Low Voltage Cabling</Link>
								</li>
								<li>
									<Link to="/service-detail">Consult and Design</Link>
								</li>
								<li>
									<Link to="/service-detail">Cyber Security</Link>
								</li>
								<li>
									<Link to="/service-detail">Video Surveillance</Link>
								</li>
								<li>
									<Link to="/service-detail">Access Controls</Link>
								</li>
								<li>
									<Link to="/service-detail">Project Management</Link>
								</li>
							</ul>
						</li>
						<li>
							<NavLink to="/reviews" className={({ isActive }) => (isActive ? "active" : "")}>
								Reviews
							</NavLink>
						</li>
					</ul>
					<ul id="cta">
						<li>
							<Link to="/contact" className="site_btn long round">
								Contact us
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navigation;

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navContext } from "../Context";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const { active, setActive } = useContext(navContext);
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Additional menu items for mobile
	const mobileMenuItems = [
		...navLinks,
		{ id: "resume", title: "Resume" },
		{ id: "videocv", title: "Video CV" }
	];

	return (
		<nav
			className={`
        ${styles.paddingX} 
        w-full flex items-center py-2 tracking-wide fixed top-0 z-20 
        ${scrolled ? "bg-primary stickyy" : "bg-transparent"}
      `}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<p className="text-[#915EFF] text-[2.5rem] font-bold cursor-pointer flex font-culpa tracking-wider">
						Sanket Yelugotla &nbsp;
					</p>
				</Link>

				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${active === nav.title ? "text-white" : "text-secondary"
								} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => {
								setActive(nav.title)
								navigate("/")
							}}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
					<li>
						<Link
							to="/resume"
							className={`${active === "Resume" ? "text-white" : "text-secondary"
								} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive("Resume")}
						>
							Resume
						</Link>
					</li>
					<li>
						<Link
							to="/videocv"
							className={`${active === "videoCv" ? "text-white" : "text-secondary"
								} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive("videoCv")}
						>
							Video CV
						</Link>
					</li>
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${!toggle ? "hidden" : "flex"
							} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{mobileMenuItems.map((item) => (
								<li
									key={item.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${active === item.title ? "text-white" : "text-secondary"
										}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(item.title);
										if (item.id === "resume") {
											navigate("/resume");
										} else if (item.id === "videocv") {
											navigate("/videocv");
										} else {
											navigate("/");
										}
									}}
								>
									{item.id === "resume" || item.id === "videocv" ? (
										<span>{item.title}</span>
									) : (
										<a href={`#${item.id}`}>{item.title}</a>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
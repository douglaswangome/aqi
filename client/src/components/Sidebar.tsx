import { FC } from "react";
import { motion } from "framer-motion";
// Icons
import { RxDashboard } from "react-icons/rx";
import { FaLeaf, FaMapLocationDot } from "react-icons/fa6";
// Links
import { NavLink } from "react-router-dom";

interface SidebarProps {
	toggle: boolean;
	handleToggle: () => void;
}

const Sidebar: FC<SidebarProps> = ({ toggle, handleToggle }) => {
	const links: { name: string; icon: JSX.Element; path: string }[] = [
		{ name: "Dashboard", icon: <RxDashboard />, path: "/" },
		{ name: "AQI", icon: <FaLeaf />, path: "/aqi" },
		{ name: "Map", icon: <FaMapLocationDot />, path: "/map" },
	];

	return (
		<div className={`sidebar ${toggle ? "show" : "hide"}`}>
			<motion.div
				className="logo"
				initial={{ x: -50, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
			>
				<img src="/images/logo.png" alt="logo" />
			</motion.div>
			<div className="links">
				{links.map((link, index) => (
					<NavLink
						key={index}
						to={link.path}
						className={({ isActive }) => (isActive ? "item active" : "item")}
						onClick={handleToggle}
					>
						<motion.div
							initial={{ x: -50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							{link.icon}
							<span>{link.name}</span>
						</motion.div>
					</NavLink>
				))}
			</div>

			<motion.div
				initial={{ x: -50, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ delay: (links.length + 1) * 0.1 }}
				viewport={{ once: true }}
			>
				<NavLink
					to="/profile"
					className={({ isActive }) =>
						isActive ? "profile active" : "profile"
					}
				>
					<div className="avatar"></div>
					<div className="info">
						<span>Andrew Gatama</span>
						<span className="subtitle">andrewgatama@gmail.com</span>
					</div>
				</NavLink>
			</motion.div>
		</div>
	);
};

export default Sidebar;

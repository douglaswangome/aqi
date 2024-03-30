import { FC } from "react";
import { motion } from "framer-motion";
// Icons
import { GiLeafSwirl } from "react-icons/gi";

interface TopbarProps {
	toggle: boolean;
	handleToggle: () => void;
}

const Topbar: FC<TopbarProps> = ({ toggle, handleToggle }) => {
	return (
		<div className="topbar">
			<div className="menu" onClick={handleToggle}>
				<motion.div
					initial={{ rotate: 0 }}
					animate={toggle ? { rotate: 90 } : { rotate: 0 }}
				>
					<GiLeafSwirl />
				</motion.div>
			</div>
		</div>
	);
};

export default Topbar;

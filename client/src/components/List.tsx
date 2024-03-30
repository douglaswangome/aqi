import { FC } from "react";
import { motion } from "framer-motion";

interface ListProps {
	items: { icon: JSX.Element; text: string; value: number; unit: string }[];
}

const List: FC<ListProps> = ({ items }) => {
	return (
		<ul>
			{items.map((item, index) => (
				<motion.li
					key={index}
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: index * 0.1 }}
					viewport={{ once: true }}
				>
					{item.icon}
					<div>
						<span>{item.text}</span>
						<span>
							{item.value}({item.unit})
						</span>
					</div>
				</motion.li>
			))}
		</ul>
	);
};

export default List;

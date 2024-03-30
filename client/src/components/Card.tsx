import { FC, ReactNode } from "react";

interface CardProps {
	className?: string;
	children: ReactNode;
	title: string;
}

const Card: FC<CardProps> = ({ className = "", children, title }) => {
	return (
		<div className={`card ${className}`}>
			{title !== "" && <span className="legend">{title}</span>}
			<div className="content">{children}</div>
		</div>
	);
};

export default Card;

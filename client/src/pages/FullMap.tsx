import { FC } from "react";
// Components
import Map from "components/Map";

const FullMap: FC = () => {
	return (
		<div className="fullmap">
			<Map zoom={20} />
		</div>
	);
};

export default FullMap;

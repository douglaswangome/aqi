import { FC } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

interface GraphProps {
	series: { data: number[]; label: string }[];
	xData: string[];
}

const Graph: FC<GraphProps> = ({ series, xData }) => {
	return (
		<LineChart series={series} xAxis={[{ scaleType: "point", data: xData }]} />
	);
};

export default Graph;

import { FC } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

interface GraphProps {
	series: { data: number[]; label: string }[];
	xData: string[];
	hideLegend: boolean;
}

const Graph: FC<GraphProps> = ({ series, xData, hideLegend = false }) => {
	return (
		<LineChart
			series={series}
			xAxis={[{ scaleType: "point", data: xData }]}
			slotProps={{ legend: { hidden: hideLegend } }}
		/>
	);
};

export default Graph;

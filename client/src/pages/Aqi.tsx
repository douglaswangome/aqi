import { FC } from "react";
// Components
import Card from "components/Card";
import List from "components/List";
import Graph from "components/Graph";
// Icons
import {
	MdOutlineKeyboardDoubleArrowDown,
	MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";

const Aqi: FC = () => {
	return (
		<div className="aqi">
			<Card className="graph" title="Air Quality Index">
				<Graph
					series={[
						{ data: [21, 20, 30, 40], label: "Ozone" },
						{ data: [23, 24, 35, 45], label: "Carbon Monoxide" },
						{ data: [21, 20, 30, 40], label: "Carbon Dioxide" },
						{ data: [23, 24, 35, 45], label: "Nitrogen Oxide" },
						{ data: [21, 20, 30, 40], label: "Nitrogen Dioxide" },
						{ data: [23, 24, 35, 45], label: "Sulfur Dioxide" },
						{ data: [21, 20, 30, 40], label: "Ammonia" },
						{ data: [23, 24, 35, 45], label: "Methane" },
						{ data: [21, 20, 30, 40], label: "PM1" },
						{ data: [23, 24, 35, 45], label: "PM2.5" },
						{ data: [21, 20, 30, 40], label: "PM10" },
					]}
					xData={["00:00", "01:00", "02:00", "03:00", "04:00"]}
					hideLegend={true}
				/>
			</Card>
			<Card className="gases" title="Gases & Particulates">
				<List
					items={[
						{
							icon: <MdOutlineKeyboardDoubleArrowDown />,
							text: "Ozone",
							value: 0.1,
							unit: "ppm",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowUp />,
							text: "Carbon Monoxide",
							value: 0.3,
							unit: "ppm",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowDown />,
							text: "Carbon Dioxide",
							value: 0.3,
							unit: "ppm",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowUp />,
							text: "Nitrogen Oxide",
							value: 0.3,
							unit: "ppm",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowDown />,
							text: "Nitrogen Dioxide",
							value: 0.2,
							unit: "ppm",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowDown />,
							text: "Sulfur Dioxide",
							value: 0.1,
							unit: "ppm",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowUp />,
							text: "Ammonia",
							value: 0.1,
							unit: "ppm",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowUp />,
							text: "Methane",
							value: 0.1,
							unit: "ppm",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowDown />,
							text: "PM1",
							value: 0.1,
							unit: "µg/m³",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowUp />,
							text: "PM2.5",
							value: 0.1,
							unit: "µg/m³",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowDown />,
							text: "PM10",
							value: 0.1,
							unit: "µg/m³",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowUp />,
							text: "PM1",
							value: 0.1,
							unit: "µg/m³",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowDown />,
							text: "PM2.5",
							value: 0.1,
							unit: "µg/m³",
						},
						{
							icon: <MdOutlineKeyboardDoubleArrowUp />,
							text: "PM10",
							value: 0.1,
							unit: "µg/m³",
						},
					]}
				/>
			</Card>
		</div>
	);
};

export default Aqi;

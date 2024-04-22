import { FC, useEffect, useState } from "react";
// Components
import Card from "components/Card";
import List from "components/List";
import Graph from "components/Graph";
// Icons
import {
	MdOutlineKeyboardDoubleArrowDown,
	MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
// Data
import { series } from "data/aqi.json";
// Moment JS
import moment from "moment/moment";

const Aqi: FC = () => {
	const [xData, setXData] = useState<string[]>([]);

	useEffect(() => {
		const handleXData = (): void => {
			const xData: string[] = [];
			for (let i = 0; i <= moment().hour(); i++) {
				xData.push(`${i}:00`);
			}
			setXData(xData);
		};

		handleXData();
	}, []);

	return (
		<div className="aqi">
			<Card className="graph" title="Air Quality Index">
				<Graph
					series={[
						{
							data: series[0].data.slice(0, moment().hour() + 1),
							label: series[0].label,
						},
						{
							data: series[1].data.slice(0, moment().hour() + 1),
							label: series[1].label,
						},
						{
							data: series[2].data.slice(0, moment().hour() + 1),
							label: series[2].label,
						},
						{
							data: series[3].data.slice(0, moment().hour() + 1),
							label: series[3].label,
						},
						{
							data: series[4].data.slice(0, moment().hour() + 1),
							label: series[4].label,
						},
						{
							data: series[5].data.slice(0, moment().hour() + 1),
							label: series[5].label,
						},
						{
							data: series[6].data.slice(0, moment().hour() + 1),
							label: series[6].label,
						},
						{
							data: series[7].data.slice(0, moment().hour() + 1),
							label: series[7].label,
						},
						{
							data: series[8].data.slice(0, moment().hour() + 1),
							label: series[8].label,
						},
						{
							data: series[9].data.slice(0, moment().hour() + 1),
							label: series[9].label,
						},
						{
							data: series[10].data.slice(0, moment().hour() + 1),
							label: series[10].label,
						},
					]}
					xData={xData}
					hideLegend={true}
				/>
			</Card>
			<Card className="gases" title="Gases & Particulates">
				<List
					items={[
						{
							icon:
								series[0].data[moment().hour()] >
								series[0].data[moment().hour() - 1] ? (
									<MdOutlineKeyboardDoubleArrowUp />
								) : (
									<MdOutlineKeyboardDoubleArrowDown />
								),
							text: "Ozone",
							value: series[0].data[moment().hour()],
							unit: "ppm",
						},
						{
							icon:
								series[1].data[moment().hour()] >
								series[1].data[moment().hour() - 1] ? (
									<MdOutlineKeyboardDoubleArrowUp />
								) : (
									<MdOutlineKeyboardDoubleArrowDown />
								),
							text: "Carbon Monoxide",
							value: series[1].data[moment().hour()],
							unit: "ppm",
						},
						{
							icon:
								series[2].data[moment().hour()] >
								series[2].data[moment().hour() - 1] ? (
									<MdOutlineKeyboardDoubleArrowUp />
								) : (
									<MdOutlineKeyboardDoubleArrowDown />
								),
							text: "Carbon Dioxide",
							value: series[2].data[moment().hour()],
							unit: "ppm",
						},
						{
							icon:
								series[3].data[moment().hour()] >
								series[3].data[moment().hour() - 1] ? (
									<MdOutlineKeyboardDoubleArrowUp />
								) : (
									<MdOutlineKeyboardDoubleArrowDown />
								),
							text: "Nitrogen Oxide",
							value: series[3].data[moment().hour()],
							unit: "ppm",
						},
						{
							icon:
								series[4].data[moment().hour()] >
								series[4].data[moment().hour() - 1] ? (
									<MdOutlineKeyboardDoubleArrowUp />
								) : (
									<MdOutlineKeyboardDoubleArrowDown />
								),
							text: "Nitrogen Dioxide",
							value: series[4].data[moment().hour()],
							unit: "ppm",
						},
						{
							icon:
								series[5].data[moment().hour()] >
								series[5].data[moment().hour() - 1] ? (
									<MdOutlineKeyboardDoubleArrowUp />
								) : (
									<MdOutlineKeyboardDoubleArrowDown />
								),
							text: "Sulfur Dioxide",
							value: series[5].data[moment().hour()],
							unit: "ppm",
						},
						{
							icon:
								series[6].data[moment().hour()] >
								series[6].data[moment().hour() - 1] ? (
									<MdOutlineKeyboardDoubleArrowUp />
								) : (
									<MdOutlineKeyboardDoubleArrowDown />
								),
							text: "Ammonia",
							value: series[6].data[moment().hour()],
							unit: "ppm",
						},
						{
							icon:
								series[7].data[moment().hour()] >
								series[7].data[moment().hour() - 1] ? (
									<MdOutlineKeyboardDoubleArrowUp />
								) : (
									<MdOutlineKeyboardDoubleArrowDown />
								),
							text: "Methane",
							value: series[7].data[moment().hour()],
							unit: "ppm",
						},
						{
							icon:
								series[9].data[moment().hour()] >
								series[9].data[moment().hour() - 1] ? (
									<MdOutlineKeyboardDoubleArrowUp />
								) : (
									<MdOutlineKeyboardDoubleArrowDown />
								),
							text: "PM2.5",
							value: series[9].data[moment().hour()],
							unit: "µg/m³",
						},
						{
							icon:
								series[10].data[moment().hour()] >
								series[10].data[moment().hour() - 1] ? (
									<MdOutlineKeyboardDoubleArrowUp />
								) : (
									<MdOutlineKeyboardDoubleArrowDown />
								),
							text: "PM10",
							value: series[10].data[moment().hour()],
							unit: "µg/m³",
						},
					]}
				/>
			</Card>
		</div>
	);
};

export default Aqi;

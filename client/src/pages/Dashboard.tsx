import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
// Components
import Card from "components/Card";
import Graph from "components/Graph";
import List from "components/List";
import Map from "components/Map";
// Icons
import {
	BsMoisture,
	BsSpeedometer,
	BsThermometerSun,
	BsWind,
} from "react-icons/bs";
// Data
import { series } from "data/aqi.json";
// Moment JS
import moment from "moment/moment";

const Dashboard: FC = () => {
	const [summary, setSummary] = useState<{
		title: String;
		description: string;
	}>({
		title: "Good",
		description:
			"Air quality is considered satisfactory, and air pollution poses little or no risk",
	});
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

		const handleSummary = (): void => {
			if (
				series[8].data[moment().hour()] > 50 &&
				series[8].data[moment().hour()] < 100
			) {
				setSummary({
					title: "Moderate",
					description:
						"Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
				});
			} else if (
				series[8].data[moment().hour()] > 100 &&
				series[8].data[moment().hour()] < 150
			) {
				setSummary({
					title: "Unhealthy for Sensitive Groups",
					description:
						"Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
				});
			} else if (
				series[8].data[moment().hour()] > 150 &&
				series[8].data[moment().hour()] < 200
			) {
				setSummary({
					title: "Unhealthy",
					description:
						"Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
				});
			} else if (
				series[8].data[moment().hour()] > 200 &&
				series[8].data[moment().hour()] < 300
			) {
				setSummary({
					title: "Very Unhealthy",
					description:
						"Health alert: everyone may experience more serious health effects.",
				});
			} else if (series[8].data[moment().hour()] > 300) {
				setSummary({
					title: "Hazardous",
					description:
						"Health warnings of emergency conditions. The entire population is more likely to be affected.",
				});
			}
		};

		handleSummary();
	}, []);
	return (
		<div className="dashboard">
			<div className="top">
				<Card title="Summary">
					<div className="summary">
						<div className="no-city">
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ delay: 0.5 }}
								viewport={{ once: true }}
							>
								<span className="value">
									{series[8].data[moment().hour()]}{" "}
								</span>
							</motion.div>
							<div className="line"></div>
							<motion.div
								initial={{ x: -50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.5 }}
								viewport={{ once: true }}
							>
								<span>{summary.title}.</span>
								<span>{summary.description}.</span>
							</motion.div>
						</div>
						<motion.div
							className="city"
							initial={{ x: -50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.5 }}
							viewport={{ once: true }}
						>
							<span className="city">Juja, KE</span>
						</motion.div>
					</div>
				</Card>
				<Card className="map" title="">
					<Map zoom={30} />
				</Card>
			</div>
			<div className="bottom">
				<Card className="graph" title="Index of the Day">
					<Graph
						series={[
							{
								data: series[8].data.slice(0, moment().hour() + 1),
								label: series[8].label,
							},
						]}
						xData={xData}
						hideLegend={false}
					/>
				</Card>
				<Card title="Environment">
					<List
						items={[
							{
								icon: <BsThermometerSun />,
								text: "Temperature",
								value: 30,
								unit: "°C",
							},
							{ icon: <BsWind />, text: "Wind Speed", value: 10, unit: "km/h" },
							{ icon: <BsMoisture />, text: "Humidity", value: 50, unit: "%" },
							{
								icon: <BsSpeedometer />,
								text: "Pressure",
								value: 1000,
								unit: "hPa",
							},
						]}
					/>
				</Card>
			</div>
		</div>
	);
};

export default Dashboard;

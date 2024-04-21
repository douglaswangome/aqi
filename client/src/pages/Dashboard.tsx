import { FC } from "react";
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

const Dashboard: FC = () => {
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
								<span className="value">80</span>
							</motion.div>
							<div className="line"></div>
							<motion.div
								initial={{ x: -50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.5 }}
								viewport={{ once: true }}
							>
								<span>Good.</span>
								<span>
									Air quality is considered satisfactory, and air pollution
									poses little or no risk.
								</span>
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
						series={[{ data: [30, 45, 47, 48, 46], label: "AQI" }]}
						xData={["00:00", "01:00", "02:00", "03:00", "04:00"]}
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

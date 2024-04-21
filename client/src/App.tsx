import "styles/App.css";
import { FC, Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "routes/routes";
import { ThemeProvider, createTheme } from "@mui/material";
import { fetchWeatherApi } from "openmeteo";

const App: FC = () => {
	const theme = createTheme({
		palette: {
			mode: "dark",
		},
		typography: {
			fontFamily: "Delius, sans-serif",
		},
	});

	useEffect(() => {
		const fetchApi = async () => {
			const params = {
				latitude: -1.1018,
				longitude: 37.0144,
				hourly: [
					"pm10",
					"pm2_5",
					"carbon_monoxide",
					"nitrogen_dioxide",
					"sulphur_dioxide",
					"ozone",
					"dust",
					"uv_index",
				],
			};

			const url = "https://air-quality-api.open-meteo.com/v1/air-quality";

			const response = await fetchWeatherApi(url, params);
			console.log(response[0]);
		};

		fetchApi();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<div>Loading...</div>}>
				<RouterProvider router={routes} />
			</Suspense>
		</ThemeProvider>
	);
};

export default App;

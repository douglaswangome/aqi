import "styles/App.css";
import { FC, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "routes/routes";
import { ThemeProvider, createTheme } from "@mui/material";

const App: FC = () => {
	const theme = createTheme({
		palette: {
			mode: "dark",
		},
		typography: {
			fontFamily: "Delius, sans-serif",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<div>Loading...</div>}>
				<RouterProvider router={routes} />
			</Suspense>
		</ThemeProvider>
	);
};

export default App;

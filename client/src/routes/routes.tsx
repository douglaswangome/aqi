import { Outlet, createBrowserRouter } from "react-router-dom";
import { FC, lazy, useState } from "react";

// Components
import Sidebar from "components/Sidebar";
import Topbar from "components/Topbar";

// Pages
const Dashboard = lazy(() => import("pages/Dashboard"));
const Aqi = lazy(() => import("pages/Aqi"));
const FullMap = lazy(() => import("src/pages/FullMap"));
const Profile = lazy(() => import("pages/Profile"));

const Layout: FC = () => {
	const [toggle, setToggle] = useState<boolean>(false);

	const handleToggle = (): void => {
		setToggle(!toggle);
	};

	return (
		<div className="app">
			<Sidebar toggle={toggle} handleToggle={() => setToggle(false)} />
			<div className="main">
				<Topbar toggle={toggle} handleToggle={handleToggle} />
				<Outlet />
			</div>
		</div>
	);
};

const routes = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: "/", element: <Dashboard /> },
			{ path: "/aqi", element: <Aqi /> },
			{ path: "/map", element: <FullMap /> },
			{ path: "/profile", element: <Profile /> },
		],
	},
]);

export default routes;

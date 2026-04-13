
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";
import Root from "../Components/Root/Root";
import TimelinePage from "../Pages/TimelinePage";
import StatsPage from "../Pages/StatsPage";

const routers = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "timeline",
                element: <TimelinePage />
            },
            {
             path: "stats",
                element: <StatsPage />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default routers;
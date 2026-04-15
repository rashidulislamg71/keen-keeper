
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";
import Root from "../Components/Root/Root";
import TimelinePage from "../Pages/TimelinePage";
import StatsPage from "../Pages/StatsPage";
import FriendDetailsPage from "../Pages/FriendDetailsPage";

const routers = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: () => fetch("/friends.json")
            },
            {
                path: "timeline",
                element: <TimelinePage />,
                loader: () => fetch("/friends.json")
            },
            {
                path: "stats",
                element: <StatsPage />
            },
            {
                path: "friendDetails/:friendId",
                element: <FriendDetailsPage />,
                loader: () => fetch("/friends.json")
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default routers;
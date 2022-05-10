import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
//list your routes here
export const routes = [
    {path: "/", element: <Homepage/>},
    {path: "*", element: <NotFound/>},
]

import './assets/css/App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import {routes} from "./routes";
import Layout from "./components/layout/Layout";


function App() {
    return (
<Layout>
    <Router>
        <Routes>
            {routes.map((route, index) => <Route key={index} {...route} />)}
        </Routes>
    </Router>
</Layout>
    );
}

export default App;

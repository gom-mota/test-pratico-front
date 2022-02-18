// Packages
import { BrowserRouter, Route, Routes  } from "react-router-dom";

// Pages
import Home from "../pages/home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
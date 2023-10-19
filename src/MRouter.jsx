import { Router, Route, Routes } from "@solidjs/router";
import Essentials from './pages/Essentials';
import Introduction from './pages/Introduction';

const MRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" component={Essentials} />
                    <Route path="/introduction" component={Introduction} />
                </Routes>
            </Router>
        </>
    )
}

export default MRouter
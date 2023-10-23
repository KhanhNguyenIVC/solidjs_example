import { Router, Route, Routes } from "@solidjs/router";
import Essentials from './pages/Essentials';
import Introduction from './pages/Introduction';
import ControlFlow from './pages/ControlFlow';
import Lifecycles from "./pages/Lifecycles";

const MRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" component={Essentials} />
                    <Route path="/introduction" component={Introduction} />
                    <Route path="/control-flow" component={ControlFlow} />
                    <Route path="/lifecycles" component={Lifecycles} />
                </Routes>
            </Router>
        </>
    )
}

export default MRouter
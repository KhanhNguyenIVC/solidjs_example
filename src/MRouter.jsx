import { Router, Route, Routes } from "@solidjs/router";
import Essentials from './pages/Essentials';
import Reactivity from './pages/Reactivity';
import ControlFlow from './pages/ControlFlow';
import Lifecycles from "./pages/Lifecycles";

const MRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" component={Essentials} />
                    <Route path="/reactivity" component={Reactivity} />
                    <Route path="/control-flow" component={ControlFlow} />
                    <Route path="/lifecycles" component={Lifecycles} />
                </Routes>
            </Router>
        </>
    )
}

export default MRouter
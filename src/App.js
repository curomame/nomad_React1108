import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./routes/Home"
import Details from "./routes/Details"

function App() {
return (
<Router>
  <Routes>
    <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}></Route>
    <Route path="/movie/:id" element={<Details />}></Route>
  </Routes>
</Router>
);
}

export default App;

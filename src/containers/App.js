import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Todos from "../components/Task/Todos";
import AddNewTask from "../components/Task/AddNewTask";
import About from "../components/common/About";
import Nav from "../components/common/Nav";

const App = () => {
    return (
        <Fragment>
            <Nav />
            <div className="d-flex justify-content-center container">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <Routes>
                            <Route path="/" exact element={<Todos/>} />
                            <Route
                                path="/about"
                                element = {<About teachersName="jack"/>}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
            <AddNewTask />
        </Fragment>
    );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import AddCar from './AddCar';
import AddJob from './AddJob';

const App = () => {
    return (
        <Router>
            <Home>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/add-car" element={<AddCar />} />
                    <Route path="/add-job" element={<AddJob />} />
                    {/* Optionally, a default route */}
                    <Route path="*" element={<Dashboard />} />
                </Routes>
            </Home>
        </Router>
    );
};

export default App;

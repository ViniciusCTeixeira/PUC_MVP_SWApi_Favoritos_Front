// src/App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import {Container} from "@mui/material";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Container maxWidth="xxl" sx={{marginTop: '30px'}}>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;

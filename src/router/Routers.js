import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Introduction from '../pages/Introduction';


function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="home" element={<Home />} />
            <Route path="detail" element={<Detail />} />
        </Routes>
    );
}

export default Routers;
import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import { useParams } from 'react-router';

const Navbar = () => {
    return (
        <Route>
            <div>
        <Link to="/Home">Home</Link>
        <Link to="/Card/:id">Card</Link>
        <Link to="/Aboute">Aboute</Link>
        <Link to="/Contact">Contact</Link>
        </div>
        </Route>
        
    )
}

export default Navbar;

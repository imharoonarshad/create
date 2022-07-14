import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 text-white h1">BulbLight</span>
                    <Link to="/form">

                        <button type="button" className="btn btn-secondary">+Add Bulb</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

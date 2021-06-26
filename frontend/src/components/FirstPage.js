import React from 'react'
import { Link } from "react-router-dom";

const FirstPage = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/SignIn">Login</Link>
                </li>
                <li>
                    <Link to="/SignUp">Register</Link>
                </li>
            </ul>
        </div>
    )
}

export default FirstPage

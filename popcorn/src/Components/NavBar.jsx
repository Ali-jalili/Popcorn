import PropTypes from "prop-types";
import { useState } from "react";
import Logo from "./Logo";


export default function NavBar({ children }) {
    const [query, setQuery] = useState("");
    return (
        <nav className="nav-bar">
            <Logo />
            {children}
            <input
                className="search"
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </nav>
    );
}

NavBar.propTypes = {
    children: PropTypes.string,

};
import { useState } from "react";
import PropTypes from "prop-types";


/**
 * A functional component that renders a box with a toggle button to show or hide its content.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be displayed inside the box.
 * @returns The rendered box component.
 */

export default function Box({ children }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="box">
            <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
                {isOpen ? "–" : "+"}
            </button>

            {isOpen && children}
        </div>
    );
}


Box.propTypes = {
    children: PropTypes.node.isRequired,

};
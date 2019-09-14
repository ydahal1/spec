import React from 'react';
const Navbar = () => {
    const wholeComponent = {
        border: "1px solid black",
        padding: "20px",
        margin: " 20px"
    }
    return (
        <div style={wholeComponent}>
            <nav>
                This is a nav bar
        </nav>
        </div>
    );
}

export default Navbar;
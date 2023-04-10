import React from "react";
import './header.css'

const HeaderList = () => {
    return (
            <ul className="list-group2 list-group-flush">
                <li className="list-group-item1" id="h1">StarDB</li>
                <li className="list-group-item1"><a href="#">People</a></li>
                <li className="list-group-item1"><a href="#">Planets</a></li>
                <li className="list-group-item1"><a href="#">Startships</a></li>
            </ul>
    )
}


export default HeaderList
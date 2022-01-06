import React from 'react';

import {useNavigate} from "react-router";
import './menu-item.scss';

export default function MenuItem({size, title, imageUrl, linkUrl}) {
    let navigate = useNavigate();

    return (
        <div
            className={`${size} menu-item`}
            onClick={() => navigate(`${linkUrl}`)}>

            <div
                className="background-image"
                style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>);
}
import React from "react";
import config from "./config";

export default (props) =>
    <header>
        <ul>
            {config.menu.map((item, i) =>
                <li key={i} onClick={() => props.setActiveIndex(i) }>
                    {props.activeIndex === i ? <b>{item.name}</b> : item.name }
                </li>
            )}
        </ul>
    </header>

import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from "../constants";
import React from "react";
import FilterLink from './FilterLink.jsx';

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter={SHOW_ALL} >All</FilterLink>{' '}
        <FilterLink filter={SHOW_ACTIVE} >Active</FilterLink>{' '}
        <FilterLink filter={SHOW_COMPLETED} >Completed</FilterLink>
    </p>
);

export default Footer;
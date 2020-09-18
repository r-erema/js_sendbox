import React, { useState } from "react";
import ReactDOM from "react-dom";
import List from "./List"

const App = () => {
    const [activeIndex, setActiveIndex] = useState(undefined)
    return <div>
        <List activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <List activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
}

ReactDOM.render(<App />, document.querySelector("#root"));

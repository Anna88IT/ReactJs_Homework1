import React, {useState} from "react";
import "./Acordion.css";

export const Elements = ({title, text,  }) => {

    const [val, setVal] = useState(true);

    const handleShowClick = () => {
        setVal(!val);
    }
    return(
        <div className="element">
            <div  className="title-line">
                <p  className="title">{title}</p>
                <button onClick={handleShowClick}>{val === true ? "+" : "-"}</button>
            </div>
            <p hidden={val}>{text}</p>
        </div>
        )
}
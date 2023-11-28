import React, {useState} from "react";
import "./Acordion.css";

export const Elements = ({title, text,  keyName}) => {

    const [val, setVal] = useState(true);
    const [sign, setSign] = useState("-");


    const handleShowClick = () => {
        setVal(!val);
        setSign(sign === "-" ? "+" : "-")
    }
    return(
        <div key={keyName} className="element">
            <div  className="title-line">
                <p  className="title">{title}</p>
                <button onClick={handleShowClick}>{sign}</button>
            </div>
            <p hidden={val}>{text}</p>
        </div>
        )
}
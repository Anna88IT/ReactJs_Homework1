import "./Acordion.css";
import {Elements} from "./Elements";
import {Questions} from "./Questions";
import React from "react";

export const Acordion = () => {

    return (
        <div className="acordion">
            <h1>Frequently Asked Questions</h1>

            {Questions.map((element) =>
                <div key = {element.id}>
                <Elements title={element.title} text={element.text}  />
                </div>
            )}

        </div>
    )
}
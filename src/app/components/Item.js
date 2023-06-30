import React from "react";

function Item(props) {
    return (
        <div
            className={`w-28 h-28 item-container pixelation flex items-center justify-center${
                !props.selected ? " brightness-50" : ""
            }`}
        >
            <img
                className="pixelation w-12 mr-1"
                src={`/assets/images/${props.item}`}
            />
        </div>
    );
}

export default Item;

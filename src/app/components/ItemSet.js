import React from "react";
import Item from "./Item";

function ItemSet(props) {
    const data = props.data;
    return (
        <>
            {data.map((x, index) => {
                return (
                    <Item
                        selected={x.id == props.counter + 1 ? true : false}
                        item={x.image}
                        key={index}
                    />
                );
            })}
        </>
    );
}

export default ItemSet;

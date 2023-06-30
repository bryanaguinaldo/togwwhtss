import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const hair = new Image();
        const body = new Image();
        const clothes = new Image();
        const eyes = new Image();
        const mouth = new Image();

        body.src = "assets/images/body.png";
        clothes.src = `assets/images/${props.clothes}`;
        hair.src = `assets/images/${props.hair}`;
        mouth.src = `assets/images/${props.mouth}`;
        eyes.src = `assets/images/${props.eyes}`;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.imageSmoothingEnabled = false;

        context.drawImage(body, 15, 120, 90, 105); // size * 5
        context.drawImage(clothes, 15, 125, 90, 100); // size * 5
        context.drawImage(hair, 0, 0, 125, 155); // size * 5
        context.drawImage(eyes, 35, 80, 50, 15); // size * 5
        context.drawImage(mouth, 45, 95, 30, 20); // size * 5
    }, [props.hair, props.eyes, props.mouth, props.clothes]);

    return <canvas ref={canvasRef} {...props} width={150} height={250} />;
};

export default Canvas;

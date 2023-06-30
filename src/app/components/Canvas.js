import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const head = new Image();
        const body = new Image();
        const clothes = new Image();
        const eyes = new Image();
        const mouth = new Image();

        head.src = "assets/images/head.png";
        body.src = "assets/images/body.png";
        clothes.src = `assets/images/${props.clothes}`;
        eyes.src = `assets/images/${props.eyes}`;
        mouth.src = `assets/images/${props.mouth}`;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.imageSmoothingEnabled = false;

        head.onload = () => {
            context.drawImage(body, 0, 85, 90, 105); // size * 5
            context.drawImage(clothes, 0, 90, 90, 100); // size * 5
            context.drawImage(head, 0, 0, 90, 95); // size * 5
            context.drawImage(mouth, 30, 55, 30, 20); // size * 5
            context.drawImage(eyes, 20, 35, 50, 15);
        };

        body.onload = () => {};
    }, [props.eyes, props.mouth, props.clothes]);

    return <canvas ref={canvasRef} {...props} width={90} height={190} />;
};

export default Canvas;

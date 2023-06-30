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

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(body, 30, 240, 180, 210); // size * 5
        context.drawImage(clothes, 30, 250, 180, 200); // size * 5
        context.drawImage(hair, 0, 0, 250, 310); // size * 5
        context.drawImage(eyes, 70, 160, 100, 30); // size * 5
        context.drawImage(mouth, 90, 190, 60, 40); // size * 5
    }, [props.hair, props.eyes, props.mouth, props.clothes]);

    return <canvas ref={canvasRef} {...props} width={250} height={450} />;
};

export default Canvas;

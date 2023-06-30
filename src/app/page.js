"use client";

import useSWR from "swr";
import { useEffect, useRef, useState } from "react";
import ItemSet from "./components/ItemSet";
import Canvas from "./components/Canvas";

const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");

        error.info = await res.json();
        error.status = res.status;
        throw error;
    }

    return res.json();
};

export default function Home() {
    const { data, error } = useSWR(`/api/items`, fetcher);

    const [hair, setHair] = useState(0);
    const [eyes, setEyes] = useState(0);
    const [mouth, setMouth] = useState(0);
    const [clothes, setClothes] = useState(0);

    const [isRestartButton, setIsRestartButton] = useState(false);
    const [isStartButton, setIsStartButton] = useState(true);

    const [isHairButton, setIsHairButton] = useState(false);
    const [isEyesButton, setIsEyesButton] = useState(false);
    const [isMouthButton, setIsMouthButton] = useState(false);
    const [isClothesButton, setIsClothesButton] = useState(false);

    const timer = (ms) => new Promise((res) => setTimeout(res, ms));

    const isHairRolling = useRef(false);
    const isEyesRolling = useRef(false);
    const isMouthRolling = useRef(false);
    const isClothesRolling = useRef(false);

    const rollItem = async (type) => {
        if (type === "hair") isHairRolling.current = true;
        if (type === "eyes") isEyesRolling.current = true;
        if (type === "mouth") isMouthRolling.current = true;
        if (type === "clothes") isClothesRolling.current = true;
        for (let i = 0; i <= 5; i++) {
            if (i === 5) i = 0;
            switch (type) {
                case "hair":
                    setHair(i);
                    break;
                case "eyes":
                    setEyes(i);
                    break;
                case "mouth":
                    setMouth(i);
                    break;
                case "clothes":
                    setClothes(i);
                    break;
                default:
                    console.log(i);
                    break;
            }
            if (type === "hair" && !isHairRolling.current) break;
            if (type === "eyes" && !isEyesRolling.current) break;
            if (type === "mouth" && !isMouthRolling.current) break;
            if (type === "clothes" && !isClothesRolling.current) break;
            await timer(1000 / 20);
        }
    };

    if (!data)
        return (
            <main className="flex flex-col min-h-screen items-center p-24">
                Loading...
            </main>
        );

    return (
        <main className="flex flex-col min-h-screen p-24">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-6">
                    {isStartButton ? (
                        <div>
                            <button
                                className="p-2 w-1/2 bg-green border-black bg-green-700 border-2 border-black mb-4 text-white"
                                onClick={() => {
                                    rollItem("hair");
                                    setIsStartButton(false);
                                    setIsHairButton(true);
                                }}
                            >
                                Start Game
                            </button>
                        </div>
                    ) : isRestartButton ? (
                        <div>
                            <button
                                className="p-2 w-1/2 bg-green border-black bg-green-700 border-2 border-black mb-4 text-white"
                                onClick={() => {
                                    setHair(0);
                                    setEyes(0);
                                    setMouth(0);
                                    setClothes(0);
                                    rollItem("hair");
                                    setIsStartButton(false);
                                    setIsHairButton(true);
                                }}
                            >
                                Restart Game
                            </button>
                        </div>
                    ) : null}
                    <span className="font-bold text-lg">Hair:</span>
                    <div className="flex items-center my-4">
                        <ItemSet data={data.hair} counter={hair} />
                        {isHairButton ? (
                            <button
                                className="bg-red-700 p-2 border border-2 border-black px-6 ml-5 text-white"
                                onClick={() => {
                                    isHairRolling.current = false;
                                    setIsHairButton(false);
                                    setIsEyesButton(true);
                                    rollItem("eyes");
                                }}
                            >
                                Stop
                            </button>
                        ) : null}
                    </div>
                    <span className="font-bold text-lg">Eyes:</span>
                    <div className="flex items-center my-4">
                        <ItemSet data={data.eyes} counter={eyes} />
                        {isEyesButton ? (
                            <button
                                className="bg-red-700 p-2 border border-2 border-black px-6 ml-5 text-white"
                                onClick={() => {
                                    isEyesRolling.current = false;
                                    setIsEyesButton(false);
                                    setIsMouthButton(true);
                                    rollItem("mouth");
                                }}
                            >
                                Stop
                            </button>
                        ) : null}
                    </div>
                    <span className="font-bold text-lg">Mouth:</span>
                    <div className="flex items-center my-4">
                        <ItemSet data={data.mouth} counter={mouth} />
                        {isMouthButton ? (
                            <button
                                className="bg-red-700 p-2 border border-2 border-black px-6 ml-5 text-white"
                                onClick={() => {
                                    isMouthRolling.current = false;
                                    setIsMouthButton(false);
                                    setIsClothesButton(true);
                                    rollItem("clothes");
                                }}
                            >
                                Stop
                            </button>
                        ) : null}
                    </div>
                    <span className="font-bold text-lg">Clothes:</span>
                    <div className="flex items-center my-4">
                        <ItemSet data={data.clothes} counter={clothes} />
                        {isClothesButton ? (
                            <button
                                className="bg-red-700 p-2 border border-2 border-black px-6 ml-5 text-white"
                                onClick={() => {
                                    isClothesRolling.current = false;
                                    setIsClothesButton(false);
                                    setIsRestartButton(true);
                                }}
                            >
                                Stop
                            </button>
                        ) : null}
                    </div>
                </div>
                <div className="col-span-6 flex items-center justify-center">
                    <Canvas
                        className="pixelation"
                        hair={data.hair[hair].image}
                        eyes={data.eyes[eyes].image}
                        mouth={data.mouth[mouth].image}
                        clothes={data.clothes[clothes].image}
                    />
                </div>
            </div>
        </main>
    );
}

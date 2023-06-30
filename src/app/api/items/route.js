import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({
        eyes: [
            {
                id: 1,
                type: "eyes",
                image: "eyes_1.png",
            },
            {
                id: 2,
                type: "eyes",
                image: "eyes_2.png",
            },
            {
                id: 3,
                type: "eyes",
                image: "eyes_3.png",
            },
            {
                id: 4,
                type: "eyes",
                image: "eyes_4.png",
            },
            {
                id: 5,
                type: "eyes",
                image: "eyes_5.png",
            },
        ],
        mouth: [
            {
                id: 1,
                type: "mouth",
                image: "mouth_1.png",
            },
            {
                id: 2,
                type: "mouth",
                image: "mouth_2.png",
            },
            {
                id: 3,
                type: "mouth",
                image: "mouth_3.png",
            },
            {
                id: 4,
                type: "mouth",
                image: "mouth_4.png",
            },
            {
                id: 5,
                type: "mouth",
                image: "mouth_5.png",
            },
        ],
        clothes: [
            {
                id: 1,
                type: "clothes",
                image: "clothes_1.png",
            },
            {
                id: 2,
                type: "clothes",
                image: "clothes_2.png",
            },
            {
                id: 3,
                type: "clothes",
                image: "clothes_3.png",
            },
            {
                id: 4,
                type: "clothes",
                image: "clothes_4.png",
            },
            {
                id: 5,
                type: "clothes",
                image: "clothes_5.png",
            },
        ],
    });
}

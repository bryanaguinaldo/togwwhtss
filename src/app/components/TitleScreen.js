import React from "react";

function TitleScreen() {
    return (
        <main className="flex flex-col min-h-screen p-24">
            <img className="w-1/2" src="/assets/images/title.png" />
            <button className="text-lg bg-red-900 border border-2 border-white w-fit p-4 mt-8">
                START GAME
            </button>
        </main>
    );
}

export default TitleScreen;

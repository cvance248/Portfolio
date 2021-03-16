import React from "react";
import image from "../help.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="hard work" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-900 font-bold cursive leading-none lg:leading-snig home-name">Hi, I'm Caleb!</h1>
            </section>
        </main>
    )
};
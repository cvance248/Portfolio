import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import about from "../about.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect (() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, [])

    if (!author) return <div>Loading...</div>

    return (
        <main className="relative">
            <img src={about} alt="tech pic" className="absolute w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shawod=2xl py-5 px-3 lg:flex lg:p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 mx-auto lg:w-64 lg:h-64 lg:mr-8 alt={author.name}"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-300 mb-4">
                            Hey there. I'm{" "}
                            <span className="text-blue-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent 
                            blocks={author.bio}
                            projectId="i9wma4jq"
                            dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
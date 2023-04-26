import { useEffect, useState } from "react";


export default function Story({ text }) {

    function parseText(text) {
        const start = text.indexOf("{{")
        const end = text.indexOf("}}", start)
        const title = text.slice(start + 2, end).trim()
        const body = text.slice(0, start) + text.slice(end + 2)

        return {
            title: title,
            body: body
        }

    }

    const [storyData, setStoryData] = useState('')

    useEffect(() => {
        if(text) {
            setStoryData(parseText(text))
        }
    }, [text])


    return (
        <>
            {
                storyData === "" ? (<></>) :
                    (
                        <div className="story-container">
                            <h1 className="story-header">{storyData.title}</h1>
                            <p className="story-body">{storyData.body}</p>
                        </div>
                    )
            }
        </>
    )

}
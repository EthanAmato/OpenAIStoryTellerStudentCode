
export default function generatePrompt({firstName, occupation, funFact, genre, famousAuthor}) {

    console.log("Inside GeneratePrompt")
    const prompt = `Generate an interesting, brief (<100 words), and well-written ${genre} short story about ${firstName}, who works as a ${occupation}. An interesting fact about ${firstName}: ${funFact}.`
                    + (famousAuthor.trim().length > 0 ? `Write the story in the style of ${famousAuthor}. If you don't know ${famousAuthor} ignore this last instruction` : ``)
                    + "Lastly, make a name for this story and enclose it in double curly brackets."
    return prompt
}
import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai';

// 1. Set up a connection with OpenAI
// 2. Create 3 states: Data, isLoading, and Errors for handling all info related
//    to an api call
// 3. Create a function that is returned from this hook alongside our 3 states
//    that takes in a prompt, calls openAI for a story, and sets our 3 states accordingly

export default function useGetStory() {

    //Step 1: Connection w/ OpenAI
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_API_KEY
    })
    delete configuration.baseOptions.headers['User-Agent'];
    const openai = new OpenAIApi(configuration)

    //Step 2: Create those three states
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //Step 3: Create state management fetch function

    const fetchStory = async (prompt) => {
        setIsLoading(true);
        try {
            //Try block will try to load data from chatgpt
            const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a skilled storyteller, adept at weaving tales based on user input." },
                    { role: "user", content: prompt}
                ]
            });
            setData(response)
        } catch (err) {
            //catch block will handle error state
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }

    return {data, isLoading, error, fetchStory}

}
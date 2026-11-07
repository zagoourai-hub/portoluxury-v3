
import { generateText, streamText } from "ai"
import { createOpenRouter } from '@openrouter/ai-sdk-provider';



 async function openrouter() {

    const MODEL = process.env.OPENROUTER_MODEL as string;
    const apiKey = process.env.OPENROUTER_API_KEY 
    if (!apiKey) {
        throw new Error("OPENROUTER_API_KEY tidak ditemukan");
    }
    
    
    const openrouter = createOpenRouter({
    apiKey,
    })
    const {text} = await generateText({
        model: openrouter.chat(MODEL),
        system: "kamu adalah asisten pribadi saya",
        prompt: "siapakah anda"
    })
    
    console.log(text)
}
openrouter().catch(console.error)
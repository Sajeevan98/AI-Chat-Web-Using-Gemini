import React, { useState } from 'react'
import Header from '../components/Header'
import ChatInput from '../components/ChatInput'
import ChatResponse from '../components/ChatResponse'
import { FetchResponse } from '../services/FetchResponse'

const Home = () => {
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleQuestionSubmit = async (question)=>{
        
        setLoading(true);
        setResponse("");

        try{
            const apiResponse = await FetchResponse(question);
            setResponse(apiResponse);
        }catch(exception){
            alert("Failed to Response! try again...");
        }finally{
            setLoading(false);
        }

    }

  return (
    <div className='home'>
        <Header />
        <ChatInput sendToParent={handleQuestionSubmit}/> 
        {
            loading ? (<img src='./loading.svg' width={100}/>): <ChatResponse response={response}/>
        }
    </div>
  )
}

export default Home
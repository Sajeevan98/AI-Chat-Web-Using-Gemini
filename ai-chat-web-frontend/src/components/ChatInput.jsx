import React, { useState } from 'react'

const ChatInput = ({sendToParent}) => {
    const [question, setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(question.trim()){
            sendToParent(question); // submit data to parent-class(Home.jsx)
            setQuestion("");
        }
    }

    return (
        <div>
            <div className='container-fluid p-5'>
                <form className='form-group' onSubmit={handleSubmit}>
                    <label className='text-warning mb-1'>Ask Question!</label>
                    <input type='text'
                        id='inputTxt'
                        className='form-control'
                        placeholder='type here...'
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)} />
                        
                    <button className='btn btn-outline-warning mt-2 fw-bold' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChatInput
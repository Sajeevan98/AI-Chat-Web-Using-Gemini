import React from 'react'

const ChatResponse = ({ response }) => {
    if (!response)
        return null;

    const { data } = response;

    return (
        <div className='container-fluid mt-2 p-5'>
            <h4 className='mb-2'>Response</h4>
            <div className='form-group'>
                {data.candidates.map((candidate, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <p className="card-text">{candidate.content.parts[0].text}</p>
                            {candidate?.citationMetadata? <h5 className="card-subtitle mb-2 text-muted">References:</h5> : '' }
                            <ul>
                                {candidate?.citationMetadata?.citationSources.map((source, key) => (
                                    <li key={key}>
                                        <a href={source.uri} target='_blank' rel=''>
                                            {source.uri}
                                        </a>
                                        <i>{" "} (Indexes: {source.startIndex} - {source.endIndex})</i>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <h6 className='text-secondary mt-3'>Usage MetaData: </h6>
                <small >Prompt Token Count: {data.usageMetadata.promptTokenCount}</small><br />
                <small>Candidates Token Count: {data.usageMetadata.candidatesTokenCount}</small><br />
                <small>Total Token Count: {data.usageMetadata.totalTokenCount}</small>
            </div>
        </div>
    )
}

export default ChatResponse
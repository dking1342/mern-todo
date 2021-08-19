import React from 'react'

const Message = ({error}) => {
    return (
        <div className="message danger">
           {error} 
        </div>
    )
}

export default Message

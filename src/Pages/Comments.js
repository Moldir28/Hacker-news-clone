import React from 'react';
import UseComments from './UseComments'
import './Comments.css'

function Comments() {
    const [ comments, isLoading, error ] = UseComments();
    console.log(comments)

    const getContent = () => {
        if(isLoading) return <div>is Loading</div>
        if(error) return <div>Request failed</div>
        return comments.map(({ comment_text, author, created_at, story_title}) => 
        (
    
        <div className='container'>
        <div className='topLine'>
          <p className='authorLine'>{author}</p> <span className='dateLine'>{created_at}</span><span className='storyLine'>on: {story_title}</span>
         </div>
        <div>
        <p className='commentLine'>{comment_text}</p>
        </div>

         </div>
        
        )

        ) 
    }

    return ( 
        
        <div className='comments'>
         <div className='contentWrapper'>
            {getContent()}
         </div>
        </div>
    )

    }



export default Comments; 
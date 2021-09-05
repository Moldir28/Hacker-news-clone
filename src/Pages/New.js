import React, { useState, useEffect } from 'react'
import './New.css'

function New({ articles, isLoading }) {

     return (
       <div className="article">
         {isLoading ? (
           <div>is loading...</div>
         ) : (
          <ol className='ol'>
           {articles.map (({title, url, points, num_comments}) => (
                
                    <li className='list'>{title} <span className='url'>({url})</span>
                    <p>{points}points| hide | discuss | {num_comments} comments</p>
                    </li>
               
          ))}
          </ol>
        )}
      </div>
    );
}

export default New

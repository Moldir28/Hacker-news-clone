import { useState, useEffect } from 'react';
const API_ROOT = "http://hn.algolia.com/api/v1/search?"


export default function UseComments() {
    const [ comments , setComments] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true); 
    const [ error, setError ] = useState(false); 

    useEffect(loadComments, []);
    
    function loadComments(searchQuery) {
        const url = searchQuery ? `${API_ROOT}/search/${searchQuery}.json` 
        : `${API_ROOT}/pop/json`; 

        setError(false);
        setIsLoading(true);
        fetch("https://hn.algolia.com/api/v1/search_by_date?tags=comment")
        .then(res => res.json())
        .then(({ hits }) => {    
          setIsLoading(false); 
          setComments(hits); 
        })
        .catch(() => setError(true));  
    }

    return [comments, isLoading, error, loadComments]; 

}
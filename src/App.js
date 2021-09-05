import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer';
import New from './Pages/New'
import Past from './Pages/Past'
import Comments from './Pages/Comments'
import NotFound from './Pages/NotFound'

const API_ROOT = "http://hn.algolia.com/api/v1/search?"

export default function App() {
  const [articles, setArticles] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(loadNews, []);

  function loadNews() {
    const url = searchQuery ? `${API_ROOT}query=${searchQuery}` 
    : `${API_ROOT}tags=front_page`; 
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setArticles(json.hits);
      })
      .catch(() => console.log("request failed"));
  }

  return (
    <div className='App'>
      <div className='frame'>
        <Header />
         <main className='main'>
         <Switch>
          <Route exact path='/'>
            <New articles={articles} isLoading={isLoading} />
          </Route>
          <Route exact path='/past'> 
            <Past />
          </Route>
          <Route exact path='/comments'> 
            <Comments />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </main>
      <Footer onChangeInput={setSearchQuery} loadNews={loadNews} searchQuery={searchQuery}/>
     </div>
    </div>

  )
}



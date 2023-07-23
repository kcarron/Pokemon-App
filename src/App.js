import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios';
function App() {

  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    setLoading(true)
    axios.get(currentPageUrl).then(
      res => {
        console.log(res.data)
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p.name))
      }
    )

  },[currentPageUrl])

  function goToNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }
  function goToPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }

  

  if(loading) return "Loading..."

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination 
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </>
  );
}

export default App;

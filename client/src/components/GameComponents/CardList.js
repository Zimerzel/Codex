import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import GameCard from './GameCard'
import Search from './Search'


const CardList = () => {
	const [games, setGames] = useState([])
	const [error, setError] = useState(false)
	const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
	const url = `https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}&ordering=-added&page_size=50`

	useEffect(
		function getGames() {
			Axios(url)
				.then((data) => {
					setGames(data.data.results)
					setError(false)
				})
				.catch((error) => {
					console.error(error)
					setError(true)
					
				})
		},
		[setGames,  REACT_APP_API_KEY, error, url]
	) 

	if(error){ 
		return (<p>oh no... looks like something went wrong</p>)
	}
	
	return (
		<>
		<Search games={games} setGames={setGames} error={error} setError={setError} />
			<div className='game-container'>
				{games.map((game) => (
					<GameCard game={game} key={game.slug} />
				))}
			</div>
		</>
	)
}

export default CardList

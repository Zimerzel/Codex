import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Axios from 'axios'


const Search = ({ games, setGames, getGames }) => {
	const [formStatus, setFormStatus] = useState('')
	const [platform, setPlatform] = useState('')
	const [genre, setGenre] = useState('')
	const [decade, setDecade] = useState('')

	const [platforms, setPlatforms] = useState('')

	const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

	useEffect(function getPlatforms() {
		const platUrl = `https://api.rawg.io/api/platforms?key=${REACT_APP_API_KEY}`
		Axios(platUrl)
			.then((data) => {
				setPlatforms(data.data.results)
			})
			.catch(console.error)
		return () => { }
	}, [])

	let url = `https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}&page_size=50`
	if (formStatus) {
		url += `&search=${formStatus}`
	}
	if (platform !== '') {
		url += `&platforms=${platform}`
	}
	if (genre !== '') {
		url += `&genres=${genre}`
	}
	if (decade !== '') {
		url += `&dates=${decade}`
	}

	const handleChange = (event) => {
		setFormStatus(event.target.value)
	}

	const handlePlatformChange = (event) => {
		setPlatform(event.target.value)
	}

	const handleGenreChange = (event) => {
		setGenre(event.target.value)
	}
	const handleDecadeChange = (event) => {
		setDecade(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		Axios(url)
			.then((data) => {
				setGames(data.data.results)
			})
			.catch(console.error)
	}

	if (!platforms) {
		return (
			<div className='details_spinner'>
				<Spinner animation='border' variant='dark' />{' '}
			</div>
		)
	}


	return (
		<div className='flex-row'  >
			<form className='d-flex flex-row' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='search or use filters '
					onChange={handleChange}
					className='input_search searchForm form-control'
				/>

				<select className='form-control dropdown-1' onChange={handlePlatformChange}>
					<option value=''>platforms</option>
					{platforms.map((plat) => (
						<option key={plat.id} value={plat.id}>
							{plat.name}
						</option>
					))}
				</select>

				<select className='form-control dropdown-2' onChange={handleGenreChange}>
					<option value=''>genres</option>
					<option value='4'>Action</option>
					<option value='51'>Indie</option>
					<option value='3'>Adventure</option>
					<option value='5'>RPG</option>
					<option value='10'>Strategy</option>
					<option value='2'>Shooter</option>
					<option value='7'>Puzzle</option>
					<option value='40'>Casual</option>
					<option value='14'>Simulation</option>
					<option value='11'>Arcade</option>
					<option value='83'>Platformer</option>
					<option value='1'>Racing</option>
					<option value='15'>Sports</option>
					<option value='59'>MMOs</option>
					<option value='6'>Fighting</option>
				</select>
				<button className='btn btn-dark form_button' type='submit'>
					Search
				</button>
			</form>
		</div>
	)
}

export default Search
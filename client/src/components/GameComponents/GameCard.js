import React from 'react'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'
const GameCard = ({ game }) => {

    // use moment to format date / time ? 

	if(!game) { 
		return (
			<p>Loading...</p>
		)
	}
	return (
		<div className='GameCard'>
			<NavLink to={`/` + game.slug}>
				<Card className='text-center, NavLink, card-body'>
					<Card.Body>
						<Card.Title className='card-title'>{game.name}</Card.Title>
						<Card.Img
							className='card-image'
							variant='top'
							src={game.background_image}
						/>
						<Card.Text className='card-description'>
							Released: {game.released} <br />
							Genre: {game.genres[0]?.name} <br />
							Metacritic Rating: {game?.metacritic}
						</Card.Text>
					</Card.Body>
				</Card>
			</NavLink>
		</div>
	)
}

export default GameCard

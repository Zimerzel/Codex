import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Spinner } from "react-bootstrap";

const GameDetails = ({ match, history, error, setError }) => {
	const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
	const gameSlug = match.params.slug

	const [game, setGame] = useState(null)
	const [platforms, setPlatforms] = useState([])
	const [rating, setRating] = useState({})
	const [developer, setDeveloper] = useState([])


    var el = document.getElementById('games-btn');
    if(el){
        el.addEventListener('load', removeBtn());
    }
    function removeBtn(){
        document.getElementById('games-btn').style.visibility="hidden"
    }
 
	useEffect(
		function getGame() {
			const url = `https://api.rawg.io/api/games/${gameSlug}?key=${REACT_APP_API_KEY}`

			Axios(url)
				.then((data) => {
					setGame(data.data)
					setPlatforms(data.data.platforms)
					setRating(data.data.esrb_rating)
					setDeveloper(data.data.developers)
				})
				.catch((error) => {
					console.error(error)
					setError(true)
				})
		},
		[REACT_APP_API_KEY, gameSlug, setError, error]
	)

	const goBack = () => { 
		history.goBack()
	}
		if (error) {
			return <p>oh no... looks like something went wrong</p>
		}
	

	if (!game) {
		return (
			<div className='details_spinner'>
				<Spinner
					animation='border'
					variant='dark'
				/>{' '}
			</div>
		)
	}
  
    return (
        <>  
            <div className='game__container'>
                <section>
                    <div className="game__header">
                        <img src={game.background_image_additional} alt="header" />
                    </div>
                </section>
                <section>
                <div className="info">
                    <div id="title__info">
                        <h1>{game.name}</h1>
                        <h2>{developer[0]?.name}</h2>
                        <h2>{game.genres[0]?.name}</h2>
                        <div id="title__about">
                            <div className="rating">
                              {game.rating} / 5
                            </div>
                        </div>
                    </div>
                    <aside>
                        <img src={game.background_image} alt="" />
                        <button><a href={game.website}>BUY</a></button>
                    </aside>
                </div>
                </section>
                <section>
                    <div id="title__description">
                        <h2>About</h2>
                        <br />
                        <p>{game.description_raw}</p>
                    </div>
                </section>
                <section className="reviews">
                    {/* <div>
                        <div>
                            <p>
                            <span>
                                {review.username}
                            </span>{' '}
                            review on {review.createdAt}
                            </p>
                            <div>
                            <p>{review.ReviewText}</p>
                            </div>
                        </div>
                    </div> */}
                </section>
            </div>

        </>
    )
}

  export default GameDetails;
  
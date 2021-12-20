import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEW } from '../utils/queries';

const SinglePost = (props) => {
    const { id: reviewId } = useParams();
    console.log(reviewId);
  
    const { loading, data } = useQuery(QUERY_REVIEW, {
      variables: { id: reviewId }
    });
    
    const review = data?.review || {};
    
    if (loading) {
      return <div>Loading...</div>;
    }


    return(
        <>  
            <div className='game__container'>
                <section>
                    <div className="game__header">
                        <img src="https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc98jk.jpg" alt="header" />
                    </div>
                </section>
                <section>
                <div className="info">
                    <div id="title__info">
                        {/* <h1>{game.name}</h1>
                        <h2>{game.released}</h2> */}
                        <h3>Game Developer</h3>
                        <div id="title__about">
                            {/* <h3>Genre(s):</h3>
                            {
                                game.genres.map(g => `${g.name} | `)
                            }   
                            <h3>Platforms:</h3>
                            {
                                game.platforms.map(p => `${p.platform.name} | `)
                            } */}
                            <div className="rating">
                                <div class="rate">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1 star</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside>
                        <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co2dto.png" alt="" />
                        <button>Buy</button>
                    </aside>
                </div>
                </section>
                <section>
                    <div id="title__description">
                        <h2>About</h2>
                        <br />
                        <p>game description</p>
                        <p><LoremIpsum p={3} /></p>
                    </div>
                </section>
                <section className="reviews">
                    <div>
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
                    </div>
                </section>
                <section id="single__carousel">
                    <div id="title__carousel">
                        <Carousel>
                            <Carousel.Item interval={6000}>
                                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/PyMlV5_HRWk?start=1" 
                                    title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/d7-iz_uLV-E?start=1" 
                                    title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </Carousel.Item>
                            <Carousel.Item interval={6000}>
                                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/MBb88gLmJZY?start=1" 
                                    title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>
            </div>

        </>
    )
}

export default SinglePost;
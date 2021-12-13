import React from 'react';
import Controller from '../assets/images/controller.jpg';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Row, Col, Card, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';

import Halo from '../assets/images/Halo.jpg';
import Forza from '../assets/images/forza.jpg';
import F1 from '../assets/images/f1.jpg';

function Home(){
    return(
        <>
            <div class="home">
                <section>
                    <div class="cloud-gaming">
                        <img src={Controller} alt="cloud gaming" />
                    </div>
                    <div class="fans">
                        <h1>For Fans, By Fans</h1>
                        <p>
                            <LoremIpsum p={2}/>
                        </p>
                    </div>
                </section>
                <section class="testimonial section container">
                <div class="testimonial__container grid">
                    <div class="testimonial-swiper">
                        <div class="-wrapper">
                            <div class="testimonial__card ">
                                <div class="testimonial__quote">
                                    <i class='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p class="testimonial__description">
                                    They are the best watches that one acquires, also they are always with the latest 
                                    news and trends, with a very comfortable price and especially with the attention 
                                    you receive, they are always attentive to your questions.
                                </p>
                                <h3 class="testimonial__date">March 27. 2021</h3>
                                <div class="testimonial__perfil">
                                    {/* <img src="assets/img/testimonial1.jpg" alt="" class="testimonial__perfil-img"/> */}
                                    <div class="testimonial__perfil-data">
                                        <span class="testimonial__perfil-name">Lee Doe</span>
                                        <span class="testimonial__perfil-detail">Director of a company</span>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial__card">
                                <div class="testimonial__quote">
                                    <i class='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p class="testimonial__description">
                                    They are the best watches that one acquires, also they are always with the latest 
                                    news and trends, with a very comfortable price and especially with the attention 
                                    you receive, they are always attentive to your questions.
                                </p>
                                <h3 class="testimonial__date">March 27. 2021</h3>
                                <div class="testimonial__perfil">
                                    {/* <img src="assets/img/testimonial2.jpg" alt="" class="testimonial__perfil-img"/> */}
                                    <div class="testimonial__perfil-data">
                                        <span class="testimonial__perfil-name">Samantha Mey</span>
                                        <span class="testimonial__perfil-detail">Director of a company</span>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial__card">
                                <div class="testimonial__quote">
                                    <i class='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p class="testimonial__description">
                                    They are the best watches that one acquires, also they are always with the latest 
                                    news and trends, with a very comfortable price and especially with the attention 
                                    you receive, they are always attentive to your questions.
                                </p>
                                <h3 class="testimonial__date">March 27. 2021</h3>
                                <div class="testimonial__perfil">
                                    {/* <img src="assets/img/testimonial3.jpg" alt="" class="testimonial__perfil-img" /> */}
                                    <div class="testimonial__perfil-data">
                                        <span class="testimonial__perfil-name">Raul Zaman</span>
                                        <span class="testimonial__perfil-detail">Director of a company</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial__images">
                        <div class="testimonial__square"></div>
                        {/* <img src="assets/img/testimonial.png" alt="" class="testimonial__img" /> */}
                    </div>
                </div>
            </section>
            <section class="games">
                <div>
                    <h1>Games</h1>
                    <div className="search">
                        <InputGroup className="mb-3">
                            <DropdownButton
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-1"
                            >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Shooter</Dropdown.Item>
                            <Dropdown.Item href="#">Fantasy</Dropdown.Item>
                            </DropdownButton>
                            <FormControl placeholder="search" aria-label="Text input with dropdown button" />
                        </InputGroup>
                    </div>
                </div>
                <div className="cards">
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={Forza} />
                            <Card.Body>
                                <Card.Title>Forza Horizon 5</Card.Title>
                                <Card.Text>
                                    Arcade Racer
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={Halo} />
                            <Card.Body>
                                <Card.Title>Halo Infinite</Card.Title>
                                <Card.Text>
                                    Sci-fi game/Shooter
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={F1} />
                            <Card.Body>
                                <Card.Title>F1 2021</Card.Title>
                                <Card.Text>
                                    Sim Racing Game
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </div>
            </section>
            </div>
        </>
    )
}

export default Home;
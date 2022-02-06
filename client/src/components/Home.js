import React from 'react';
import Hero from '../assets/images/hero.jpg';
import { LoremIpsum } from 'react-lorem-ipsum';
import { HashLink } from 'react-router-hash-link';
import CardList from './GameComponents/CardList';

function Home(){
    var el = document.getElementById('games-btn');
    if(el){
        el.addEventListener('load', addBtn());
    }
    function addBtn(){
        document.getElementById('games-btn').style.visibility="visible"
    }
    return(
        <>
            <div class="home">
                <section>
                    <div class="cloud-gaming">
                        <div id="hero-title">
                            <h1>For Fans, By Fans</h1>
                            <HashLink to="#games" smooth id="hero-btn">
                                Games
                            </HashLink>
                        </div>
                        <img src={Hero} alt="cloud gaming" />
                    </div>
                </section>
                <section>
                    <div id="reviews-title">
                        <h1> Hear what others are saying</h1>
                    </div>
                </section>
                <section class="testimonial section container">
                <div class="testimonial__container grid">
                    <div class="testimonial-swiper">
                        <div class="-wrapper">
                            <div class="testimonial__card">
                                <div class="testimonial__quote">
                                    <i class='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p class="testimonial__description">
                                    <LoremIpsum />
                                </p>
                                <h3 class="testimonial__date">March 27. 2021</h3>
                                <div class="testimonial__perfil">
                                    <img src="https://yt3.ggpht.com/H_---ano_f27DOCejDhUdBMtBcxcv32MoXmFKQc_mBcxYSH4HPZTGuBUdm7UgI5VlutMOVX2=s900-c-k-c0x00ffffff-no-rj" alt="" class="testimonial__perfil-img" width="200px"/>
                                    <div class="testimonial__perfil-data">
                                        <span class="testimonial__perfil-name">IGN</span>
                                        <span class="testimonial__perfil-detail">Video Game and Enertainment Media</span>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial__card2">
                                <div class="testimonial__quote">
                                    <i class='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p class="testimonial__description">
                                    <LoremIpsum />
                                </p>
                                <h3 class="testimonial__date">March 27. 2021</h3>
                                <div class="testimonial__perfil">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///9+uQIAo+7/uAbxUCH719D6/v//9+a314j//Pt6twCv0X91tQDg7c3/uQD/swD/0X8wqu/y+ObwQQDwTBr/vTH2opAAnO3wRw5AsfHzb04Aoe73rp72mob2+u/Q5LTyaUbvMgDvKQBqsACqz3f71Mzq895Vt/L/1ItoOYLBAAABOElEQVR4nO3ayVICMRRA0ZZ2AlpR2wkncPb/v1DAH0iq6Ernec4+i1t5STZpGgAAAAAAAAAAAAAAAACAPXu6zfA83ax4mZ9mWJUObNb9fbrXbeHV+yxd91E6sHm4PkzX7wq7g3SzeelAhQoVKlSoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKgxVuO4zvP39a+sylP/XdpTjc7tiepbjq3QgMALLSYa7482Kk8V5uvaidGCzfBy0cFFnYZtBocI9FGYEKlSocKBCN039hfH3MH5h/ClVWH+hc1h/Yfw9jF8Yf0oVKlRYOlChwhoKvfgKFZYO/A/nMH5h/ClVqHD8hfFvmviF8ac0fqEprb9w2D0cwa+v78sMk11he5Php3QgAAAAAAAAAAAAAAAAABDPL5NPkfEPxRraAAAAAElFTkSuQmCC" alt="" class="testimonial__perfil-img" width="200px"/>
                                    <div class="testimonial__perfil-data">
                                        <span class="testimonial__perfil-name">Bill Gates</span>
                                        <span class="testimonial__perfil-detail">Microsoft Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial__card3">
                                <div class="testimonial__quote">
                                    <i class='bx bxs-quote-alt-left' ></i>
                                </div>
                                <p class="testimonial__description">
                                    <LoremIpsum />
                                </p>
                                <h3 class="testimonial__date">March 27. 2021</h3>
                                <div class="testimonial__perfil">
                                    <img src="data:image/png;base64,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" alt="" class="testimonial__perfil-img" />
                                    <div class="testimonial__perfil-data">
                                        <span class="testimonial__perfil-name">PC Gamer</span>
                                        <span class="testimonial__perfil-detail">Magazine</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="fans">
                    <h1>Leave A Review</h1>
                    <p>
                        <LoremIpsum p={1}/>
                    </p>
                </div>
            </section>
            <section className="games" id="games">
                <CardList/>
            </section>
            </div>
        </>
    )
}

export default Home;
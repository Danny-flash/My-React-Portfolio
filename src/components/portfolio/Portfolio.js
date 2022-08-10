import React from 'react'
import IMG1 from '../../assets/social.jpg'
import IMG3 from '../../assets/quiz.jpg'
import IMG2 from '../../assets/carty.jpg'
import IMG4 from '../../assets/dice.jpg'
import IMG5 from '../../assets/portfo.jpg'
import IMG6 from '../../assets/planet.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Send-mie Social app',
        github: "https://github.com/Danny-flash/Sendmie-app",
        demo: "https://sendmie.netlify.app",
    },
    {
        id: 2,
        image: IMG2,
        title: 'Gamersmart',
        github: "https://github.com/Danny-flash/Gamersmart",
        demo: "https://gamersmart.netlify.app"
    },{
        id: 3,
        image: IMG3,
        title: 'Intellico Quiz App',
        github: " https://github.com/Danny-flash/my-personal-quiz-app",
        demo: "https://intellico.netlify.app"
    },{
        id: 4,
        image: IMG6,
        title: 'Eco-planet',
        github: " https://github.com/Danny-flash",
        demo: "https://ecoplanet.netlify.app"
    },{
        id: 5,
        image: IMG4,
        title: 'Tenze Game Using React',
        github: "https://github.com/Danny-flash/Tenzie-game",
        demo: "https://tenzzy.netlify.app"
    },{
        id: 6,
        image: IMG5,
        title: 'React PortFoilo',
        github: "https://github.com/Danny-flash",
        demo: "https://danielmide.netlify.app"
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) =>{
                       return(
                        <articule key={id} className="portfolio__item" data-aos="zoom-in">
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                        </div>
                            <h3>{title}</h3>
                         <div className="portfolio__item-cta">
                         <a href={github} className="btn" target="_blank">Github</a>
                            <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                         </div>
                    </articule>
                       )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio

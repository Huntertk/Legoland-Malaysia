import React from 'react'
import '../styles/homeWhyVisit.scss'

const HomeWhyVisit = () => {
  
  return (
    <section className='whyVisitMainComponents'>
        
        <h1>Why Visit Legoland</h1>
        <div className="whyVisitCardContainer">
            <div className="listData">

                    <p>
                        <img src="https://i.postimg.cc/PqNMjHDZ/8f.jpg" alt="image" /><br />
                        Enjoy the panoramic view of structures from whole over the world like Taj Mahal, KLCC Twin Tower and many more beautiful monument at The Miniland.<br/>
                    </p>
                    <p>
                        <img src="https://i.postimg.cc/G2xtg8pj/build-test.jpg" alt="" /><br />
                        Experience yourself by being a Lego Engineer and build your own racecar toracewith your friends.<br/>
                    </p>
                    <p>
                        <img src="https://i.postimg.cc/tTxtsz24/72a60970-c8f0-4300-a660-6b9e3da8ce99.jpg" alt="" /><br />
                        Prepare to travel into the world's steepest tunnel, take in the beautiful scenery.<br/> 
                    </p>
            </div>
        </div>
    </section>
  )
}

export default HomeWhyVisit
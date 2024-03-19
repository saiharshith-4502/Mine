import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from "../../dummydata"
import AWrapper from './AWrapper'
import "./about.css"

const Aboutcard = () => {
  return (
    <>
        <section className="aboutHome">
            <div className="container flexSB alignLeft">
                <div className="left row">
                    <img src="./Images/about.webp" alt="" />
                </div>
                <div className="right row">
                    <Title subtitle="LEARN ANYTHING" title="Benefits About Studying at REVA University " />
                    <div className="items">
                        {homeAbout.map((val, index) => 
                            <div key={index} className={`item ${index === 0 ? 'flexSB' : ''}`}>
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                            </div> 
                            )}
                    </div>
                </div>
            </div>
        </section>
        <AWrapper />
    </>
  )
}

export default Aboutcard
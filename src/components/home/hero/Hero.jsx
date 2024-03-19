import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

const Hero = () => {
  const rowStyle = {
    backgroundColor: 'rgba(255, 215, 185, 0.7)',
  };
  return (
    <>
        <section className='hero'>
          <div className="container">
            <div className="row" style={rowStyle}>
              <Title subtitle='WELCOME TO REVA' title='Enrich Your Future with REVA University'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, totam dicta! Obcaecati repellat beatae reiciendis quo voluptatem architecto aliquam nostrum, officiis explicabo saepe eveniet vitae similique totam dolorum natus et!</p>
              <div className="button">
                <button className='primary-btn'>
                  Apply Now <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
                  Explore programs <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Hero
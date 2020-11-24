import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ampheadLogo from '../../assets/amphead-between.png';
import ampRepair from '../../assets/amp-repair-parallax.png'
import './BetweenBar.css';


const BetweenBar = (sectionImage) => {
  return (
    
      <ParallaxBanner
        className='between-bar'
        layers={[
          {
            image: ampheadLogo,
            amount: 0.1,
          },
          {
            image: ampRepair,
            amount: -0.1,
          },
        ]}
        style={{
          height: '200px',
          width: '100vh'
        }}
        >
        </ParallaxBanner>
    
  )
};





export default BetweenBar

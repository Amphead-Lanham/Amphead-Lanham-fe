import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ampheadLogo from '../../assets/amphead-between.png';
import modification from '../../assets/modification-parallax.png';

const ModificationBar = () => {
  return (
    <ParallaxBanner
    className='between-bar'
    layers={[
      {
        image: ampheadLogo,
        amount: 0.1,
      },
      {
        image: modification,
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
}

export default ModificationBar

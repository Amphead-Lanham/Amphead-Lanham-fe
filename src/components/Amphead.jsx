import React from 'react';
import News from './News';
import BetweenBar from './between-bars/BetweenBar';
import GuitarBar from './between-bars/GuitarBar';
import OverhaulBar from './between-bars/OverhaulBar';
import RestorationBar from './between-bars/RestorationBar';
import Maintenance from './Maintenance';
import GuitarService from './GuitarService';
// import Experiment from './Experiment';
import './Amphead.css';
import Overhaul from './Overhaul';
import Restoration from './Restoration';
import ModificationBar from './between-bars/ModificationBar';
import Modification from './Modification';
import Header from './Header';


const Amphead = () => {
  
  return (
    <>
      
      <Header className='header-box'/>
      
    <div className='outerBox'>
      <div className='news-box'>
      <News />
      </div>
      <div className='service-box'>
      <BetweenBar />
      <Maintenance />
      </div>
      <div className='guitar-service'>
      <GuitarBar />
      <GuitarService />
      </div>
      <div className='tube-overhaul'>
      <OverhaulBar />
      <Overhaul />
      </div>
      <div className='restoration'>
      <RestorationBar />
      <Restoration />
      </div>
      <div className='modification'>
      <ModificationBar />
      <Modification />
      </div>
     
    </div>
    </>
  )
}

export default Amphead

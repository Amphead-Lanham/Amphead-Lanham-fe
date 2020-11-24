import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Amphead from './components/Amphead';

function App() {
  return (
              <ParallaxProvider>   
                  <Router>
                    <Switch>
                    
                        <Route 
                           exact path="/" 
                           component={Amphead}
                        />
                        {/* <Route 
                           exact path="/create" 
                           render={(routerProps) => <CreatePage {...routerProps} />} 
                        /> */}
                        </Switch>
                    
                    </Router>
                    </ParallaxProvider> 
           
            
    
  );
}


export default App;

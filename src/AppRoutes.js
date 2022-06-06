import React from 'react';
import Home from '.Components/Home';  
import Index from '.Components/Index';
import Notfound from '.Components/Notfound';

export const AppRoutes = () => {
    return (
          <Route path="/Home" component={Home} />  
          <Route path="/Index" component={Index} />  
              <Route path="/Notfound" component={Notfound} />  

    )
}

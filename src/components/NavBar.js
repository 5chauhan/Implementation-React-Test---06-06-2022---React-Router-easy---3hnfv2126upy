import React from 'react';
import Homepage from './home-page'  
import index from './index-page'  


export const NavBar = () =>{
    return(
        <nav>
<ul>
         <li class="home-link" > <Route path="/home-page" component={home-page} />  </li>
         <li class="index-link" > <Route path="/index-page" component={index-page} />  </li>
     
</ul>
</nav>

    )
}

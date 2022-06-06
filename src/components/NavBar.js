import React from 'react';
import Home from './Home'  
import Index from './Index'  


export const NavBar = () =>{
    return(
        <nav>
<ul>
         <li class="home-link" > <Route path="/Home" component={Home} />  </li>
         <li class="index-link" > <Route path="/Index" component={Index} />  </li>
     
</ul>
</nav>

    )
}

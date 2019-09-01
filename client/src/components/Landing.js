import React, { Component } from 'react';
import SearchHut from './SearchHut';
class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>            
                <div>
                    This is a landing page
                </div>
                <SearchHut />
            </div>
         );
    }
}
 
export default Landing;
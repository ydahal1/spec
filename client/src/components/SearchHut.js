import React, { Component } from 'react';
class SearchHut extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form>
                    <div>
                        <label>Camp : </label>
                        <select>
                            <option>Beldaing-I</option>
                            <option>Beldaing-II</option>
                            <option>Beldaing-III</option>
                            <option>Goldhap</option>
                            <option>Khudunabari</option>
                            <option>Pathri</option>
                            <option>Timai</option>
                        </select>
                    </div>
                    <div>
                        <label>Sector : </label>
                        <select>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                            <option>F</option>
                            <option>G</option>
                            <option>H</option>
                            <option>I</option>
                        </select>
                    </div>
                    <div>
                        <label>Unit : </label>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchHut;
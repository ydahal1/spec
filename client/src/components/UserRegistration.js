import React, { Component } from 'react';
class UserRegistration extends Component {
    state = {  }
    render() { 
        const wholeComponent = {
            border: "1px solid black",
            padding: "20px",
            margin: " 20px"
        }
        const inputGroups = {
            margin: "10px"
        }
        const inputField = {
            marginRight: "10px"
        }
    
        return (
            <div style={wholeComponent}>
                <form>
                    <div style={inputGroups}>
                    <input style={inputField}type="text" placeholder="first name" />
                    <input style={inputField} type="text" placeholder="last name" /> <br/>
                    </div>
                    
                <div style={inputGroups}>
                    <select style={inputField}>
                        <option default > Camp </option>
                        <option>Beldaing - I </option>
                        <option>Beldaing - II </option>
                        <option>Beldaing - III </option>
                        <option>Pathri </option>
                        <option>Timai </option>
                        <option>Goldhap</option>
                        <option>Khudunabari</option>
                    </select> 
                    <select style={inputField}>
                        <option default > Sector </option>
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
                    <select style={inputField}>
                    <option>Unit</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4 </option>
                    </select> 
                    </div>
                    <div style={inputGroups}>
                        <label>Hut Number: </label>
                        <input type="number" /> - <input type="number" />
                    </div>
                    <div style={inputGroups}>
                        <label> Contct Number: </label>
                        <input type='text'/>
                    </div>
                    <div style={inputGroups}>
                    <input type="submit" value="Submit" />
                    </div>

                </form>
            </div>
          );
    }
}
 
export default UserRegistration;
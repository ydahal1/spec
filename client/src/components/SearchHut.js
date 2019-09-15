import React, { Component } from 'react';
class SearchHut extends Component {
    state = {}
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
                <div style={inputGroups}>
                    <button>Visit your hut</button>
                </div>
                <div style={inputGroups}>
                    <form>
                        <div>
                            <select style={inputField}>
                                <option>Camp</option>
                                <option>Beldaing-I</option>
                                <option>Beldaing-II</option>
                                <option>Beldaing-III</option>
                                <option>Goldhap</option>
                                <option>Khudunabari</option>
                                <option>Pathri</option>
                                <option>Timai</option>
                            </select>
                            
                            <select style={inputField}>
                            <option>Sector : </option>
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
                            <option>Unit : </option>

                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchHut;
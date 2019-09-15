import React, { Component } from 'react'
class HutRegistration extends Component {
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

        const fieldset = {
            border: "1px dotted gray",
            margin: "20px"
        }

        return (
            <div style={wholeComponent}>
                <form>
                    <fieldset style={fieldset}>
                        <div style={inputField} >
                            <input type="radio" name="registeringFor" /> I am registering my hut
                    </div>
                        <div style={inputField} >
                            <input type="radio" name="registeringFor" /> I am registering my nighbors/relative/friend's hut
                    </div>
                        <div style={inputGroups}>
                            <input style={inputField} type="text" name="familyLastName" placeholder="FamilyLast Name" />
                            <input style={inputField} type="number" max="20" min="1" placeholder="Family size" />
                        </div>
                    </fieldset>

                    <fieldset style={fieldset}>
                        <legend>Camp Address </legend>
                        <div style={inputGroups}>
                            <select style={inputField}>
                                <option> Beldanig - I </option>
                                <option> Beldanig - II  </option>
                                <option> Beldanig - III  </option>
                                <option> Pathri  </option>
                                <option> Timai  </option>
                                <option> Goldhap  </option>
                                <option> Khudunabari  </option>
                            </select>

                            <select style={inputField}>
                                <option> A  </option>
                                <option> B  </option>
                                <option> C  </option>
                                <option> D  </option>
                                <option> E  </option>
                                <option> F  </option>
                                <option> G  </option>
                                <option> H  </option>
                                <option> I  </option>
                                <option> J  </option>
                            </select>

                            <select style={inputField}>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                                <option> 4 </option>

                            </select>
                        </div>

                        <div style={inputGroups}>
                            <select style={inputField}>
                                <option>Single Hut </option>
                                <option>Double Hut </option>
                            </select>
                            <input style={inputField} type="number" min="0" max="500" /> -
                            <input style={inputField} type="number" min="0" max="500" />
                        </div>
                    </fieldset>

                    <fieldset style={fieldset}>
                        <legend> Bhutan Address : </legend>
                        <input style={inputField} placeholder="District" type="text" name="district" />
                        <input style={inputField} placeholder="village" type="text" name="village" />

                    </fieldset>

                    <fieldset style={fieldset}>
                        <legend> Current Address : </legend>
                        <div style={inputGroups}>
                            <select style={inputField}>
                                <option value="AU">Australia</option>
                                <option value="BT"> Bhutan </option>
                                <option value="CA">Canada</option>
                                <option value="DK">Denmark</option>
                                <option value="IN">India</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NO">Norway</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="others"> Other </ option>
                            </select>

                            <input style={inputField} type="text" placeholder="state/province" />
                            <input style={inputField} type="text" placeholder="city" />
                        </div>
                    </fieldset>
                    <div style={inputGroups}>
                        <input style={inputField} type="submit" value="submit" />
                    </div>
                </form>
            </div >
        );
    }
}

export default HutRegistration;
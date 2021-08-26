import React, {useState} from "react";
import './HiddenSearch.scss'
const HiddenSearch = (props) => {

    const [active, setToggle] = useState(false);

    const ToggleActive = () =>{
        setToggle(!active)
    }

    return(
        <div className={(active) ? "search active" : "search"}> 
            <input type="text" className="searchInput" placeholder="Search..."></input>
            <button className="search-btn"><i class="fa fa-search" aria-hidden="true" onClick={ToggleActive}></i></button>
        </div>
    ) 
}

export default HiddenSearch;
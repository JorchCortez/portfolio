import React from 'react'
import './ExpandingCard.scss'

const ExpandingCard = (props) => {
return(
    <div className="ex-card--container">
        {props.cards.map((card, i ) => { 
            var classes = (i === props.activeCard) ? "ex-card--panel active" : "ex-card--panel";
            return(
                <div key={i} className={classes} style={{backgroundImage: `url(${card.img})`}} onClick={()=>{props.setActive(i)}} >  
                    <h3>{card.title} </h3>
                </div>
            )})}  
    </div>
)
}

export default ExpandingCard
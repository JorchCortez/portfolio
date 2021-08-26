import React,{useState} from "react";
import './ProgressSteps.scss'


const ProgressSteps = (props) => {
    const [progress, setProgress] = useState('0%');
 
const getProgress = (curr) => {
    let _progress =  (curr  / (props.steps.length -1)) * 100 + '%'; 
    return _progress
}

const IncreaseProgress = () => { 
    props.setStep(props.currentStep + 1)
    setProgress(getProgress(props.currentStep + 1));
}

const DecreaseProgress = ( ) => { 
    props.setStep(props.currentStep - 1)
    setProgress(getProgress(props.currentStep - 1));
}

const setSpecific = (_id) => { 
    props.setStep(_id)
    setProgress(getProgress(_id));
}
    return(
        <div style={{width:`${props.cssWidth}`}} className="ps">
            <div className="steps-container">
                {props.steps.map((step, i) => { 
                    var classes = (i <= props.currentStep ) ? "circle active" : "circle";
                    return( <div key={i} className={classes} onClick={()=>{setSpecific(i)}}>{step}</div>) 
                })}
                <div style={{width:`${progress}` }} className="progress"></div> 
                <div className="progress-bar"></div> 
            </div>
            <div className="progress-content"> 
                {props.children}
            </div> 
            <button 
                className="btn" 
                id="prev" 
                disabled={(props.currentStep <= 0)}
                onClick={DecreaseProgress}>Prev</button>
            <button 
                className="btn" 
                id="next" 
                disabled={(props.currentStep >= props.steps.length - 1)}
                onClick={IncreaseProgress} >Next</button>
        </div>
    );
}

export default ProgressSteps
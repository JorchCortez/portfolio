import React, {useState, useEffect} from "react";
import './RandomDadJokes.scss'

const RandomDadJokes = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [joke, setJoke] = useState();

    useEffect(() => getJoke(), [])

    const getJoke = () =>{ 
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        fetch("https://icanhazdadjoke.com/", requestOptions)
        .then(response => response.text())
        .then(result => {
            let res = JSON.parse(result)
            setIsLoaded(true);
            setJoke(res.joke)
        }, 
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
        .catch(error => console.log('error', error)) 
    }

    const showcontainer = (innerText) => {
        return(
            <div className="joke--container">
            <h3>Random Dad joke Generator</h3>
            <div className="joke">
                {innerText}
            </div>
            <button className="btn" onClick={getJoke}>Just one more</button>
        </div>
        )
    }

    if (error) {
        return showcontainer("Wellp we're either out of jokes or there was an issue finding one, wanna retry?") ;
    } else if (!isLoaded) {
        return showcontainer("Loading") 
    } else { 
    return showcontainer(joke);
    
}

} 

export default RandomDadJokes;
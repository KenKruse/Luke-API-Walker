import React, {useState, useEffect} from 'react';
import axios from 'axios';

const People = (props) => {
    // const {id} = props;
    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + props.id + "/")

            .then(response => {setInfo(response.data);
                console.log(response.data)
            })

            .catch(() => console.log("These aren't the droids you're looking for."))
    }, [props.id])

    return (            
        <div>
            <h3>Name: {info && info.name}</h3>
            <p>Height: {info && info.height}</p>
            <p>Mass: {info && info.mass}</p>
            <p>Hair Color: {info && info.hair_color}</p>
            <p>Skin Color: {info && info.skin_color}</p>
        </div>
    )
}

export default People

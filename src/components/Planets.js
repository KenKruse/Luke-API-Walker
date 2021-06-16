import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Planets = (props) => {
    // const {id} = props;
    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + props.id + "/")

            .then((response) => {setInfo(response.data);
                console.log(response.data)
            })

            .catch(() => console.log("These aren't the droids you're looking for."))
    }, [props.id])

    return (            
        <div>
            <h3>Name: {info && info.name}</h3>
            <p>Climate: {info && info.climate}</p>
            <p>Terrain: {info && info.terrain}</p>
            <p>Gravity: {info && info.gravity}</p>
            <p>Population: {info && info.population}</p>
        </div>
    )
}

export default Planets;
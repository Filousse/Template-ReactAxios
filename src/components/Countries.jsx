import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from "axios";

const Countries = () => {
    const [data, setData] = useState([]);
    const [sorteData, setSorteData] = useState([]);
    // PlayOnce empêche de faire des appel axios en boucle
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [ selectedRadio, setSelectedRadio] = useState(true)

    useEffect(()=> {
        if (playOnce) {
            axios
                .get(
                    "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
                )
                .then((res) => setData(res.data));
                setPlayOnce(false);
        }
        const sorteCountry = () => {
     // Sorte fonctionne sur les obj et non les tableau => 
            const countryObj = Object.keys(data).map((i) => data[i]);
            const sorteArray = countryObj.sort((a, b) => {
                return b.population - a.population;
            });
            sorteArray.length = rangeValue;
            setSorteData(sorteArray);
        }
        sorteCountry();
        },[data, playOnce, rangeValue]);

    return (
        <div className="countries">
            <div className="sort-container">
                <input 
                    type="range" 
                    min="1" 
                    max="250" 
                    value={rangeValue} 
                    onChange={(e)=>setRangeValue(e.target.value)}
                />
                <ul>
                    {radios.map((radio) => {
                        return (
                            <li key={radio}>
                                <input 
                                    type="radio" 
                                    value={radio} 
                                    id={radio}
                                    checked={radio === selectedRadio} 
                                    onChange={(e) => setSelectedRadio(e.target.value)}
                                />
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio &&  <h5 onClick ={()=> setSelectedRadio("")}>annuler recherche</h5>}
            </div>
             <ul className="countries-list">
                {sorteData
                    .filter((country) => country.region.includes(selectedRadio))
                    .map((country)=>(
                    <Card country={country} key={country.name}/>
                ))}
            </ul>
        </div>
    );
};

export default Countries;
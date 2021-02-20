import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
// import axios from "axios";
import Countries from './../components/Countries'

const Home = () => {



// const options = {
//   method: 'GET',
//   url: 'https://states2.p.rapidapi.com/query',
//   params: {country: 'USA'},
//   headers: {
//     country: 'USA',
//     'x-rapidapi-key': 'ee0beb3c33msh14599be3668e7bdp11956bjsn94c4d23f8950',
//     'x-rapidapi-host': 'states2.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
    return (
        <div className="home">
            <Navigation/>
                 <Logo/>
                 <Countries/>
        </div>
    );
};

export default Home;



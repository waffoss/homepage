import axios from "axios";

export const getCovidData = () =>{
    return axios.get('https://www.trackcorona.live/api/countries/bg');
}

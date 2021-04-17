import React, {useEffect, useState} from "react";
import {getCovidData} from '../../services/covid-service'
import get from 'lodash/get';
import CovidDto from "../../dtos/covid.dto";
import './CovidTracker.scss';

function CovidTracker() {

    const [covidData, setCovidData] = useState(new CovidDto());

    useEffect(() => {
        getCovidData().then(res => {
            setCovidData(get(res, "data.data[0]", new CovidDto()))
        })
    },[]);

    return (
        <div className="covid-tracker">
            <p>COVID-19 {covidData.location}</p>
            <p>&#129314; {covidData.confirmed}</p>
            <p>&#129303; {covidData.recovered}</p>
            <p>&#128128; {covidData.dead}</p>
        </div>
    );
}

export default CovidTracker;

import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox.js";
import Map from "./Map.js";
import Table from "./Table";
import LineGraph from "./LineGraph";
import { sortData } from "./util";
import "./App.css";

function App() {
  // Creating a useState for countries
  const [countries, setCountries] = useState([]);
  //keeping record of selected country
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  //setting up the table data
  const [tableData, setTableData] = useState([]);

  //this is used to set for the worldwide when no option is selected
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  //UseEffect is used to load that amount of data from one to n number of times depends of the value given in the array
  //async -> send a request, wait for it and perfrom some actions
  //getting the data from disease.sh api here we are getting the country name and code

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //here we are getting country name
            value: country.countryInfo.iso2, //here we can fetch country code
            flag: country.countryInfo.flag,
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  //When ever the drop down is triggered it is called:
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    //fetching data from api
    const url =
      countryCode === "worldWide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //specific country code
        setCountry(countryCode);

        setCountryInfo(data);
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div class="app__header">
          <h1>COVID-19 TRACKER</h1>
          {/* Helps to implement the country drop down list */}
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {/* These all will be displayed as a selecting items */}
              {/* Loop through all countries and show a drop down list of the options */}
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          {/* Info Box 1 */}
          <InfoBox
            title="Coronavirus Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          {/* Info Box 2 */}
          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          {/* Info Box 3 */}
          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>

        {/* Map */}
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          {/* Table */}
          <Table countries={tableData} />
          <h3>Worldwide New Cases</h3>
          {/* Graph */}
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

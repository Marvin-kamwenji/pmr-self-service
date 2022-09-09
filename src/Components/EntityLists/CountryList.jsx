import React from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8080/rest/entities/Country";

export default class CountryList extends React.Component {
    state = {
      countries: []
    };

    componentDidMount() {
        axios.get(baseURL).then(res => {
          const countries = res.data;
          this.setState({ countries });
        });
      }


      render() {
        return (
          <select id="inputState" className="form-select">
            {this.state.countries.map(country => <option key={country.id}>{country.countryName}</option>)}
          </select>
        );
      }
    }
import React from 'react';
import axios from 'axios';

export default class CountryList extends React.Component {
    state = {
      countries: []
    };

    componentDidMount() {
        axios.get(` http://localhost:8080/rest/entities/Country`).then(res => {
          const countries = res.data;
          this.setState({ countries });
        });
      }


      render() {
        return (
          <select id="inputState" class="form-select">
            {this.state.countries.map(country => <option>{country.countryName}</option>)}
          </select>
        );
      }
    }
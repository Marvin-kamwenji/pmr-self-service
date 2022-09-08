import React from 'react';
import axios from 'axios';

export default class BankList extends React.Component {
    state = {
      banks: []
    };

    componentDidMount() {
        axios.get(` http://localhost:8080/rest/entities/Bank?fetchPlan=bank-fetch-plan`).then(res => {
          const banks = res.data;
          this.setState({ banks });
        });
      }


      render() {
        return (
          <select id="inputState" class="form-select">
            {this.state.banks.map(bank => <option>{bank.name}</option>)}
          </select>
        );
      }
    }
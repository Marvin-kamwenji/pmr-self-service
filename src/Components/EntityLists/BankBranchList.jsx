import React from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8080/rest/entities/Bank?fetchPlan=bank-fetch-plan";

export default class BankBranchList extends React.Component {
    state = {
      banks: []
    };

    componentDidMount() {
        axios.get(baseURL).then(res => {
          const banks = res.data;
          this.setState({ banks });
        });
      }


      render() {
        return (
          <select id="inputState" className="form-select">
            {this.state.banks.map(bank => <option key={bank.id}>{bank.name}</option>)}
          </select>
        );
      }
    }
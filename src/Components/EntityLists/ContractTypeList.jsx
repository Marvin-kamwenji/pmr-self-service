import React from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8080/rest/entities/ContractType";

export default class ContractTypeList extends React.Component {
    state = {
      contractTypes: []
    };

    componentDidMount() {
        axios.get(baseURL).then(res => {
          const contractTypes = res.data;
          this.setState({ contractTypes });
        });
      }


      render() {
        return (
          <select id="inputState" className="form-select">
            {this.state.contractTypes.map(contractType => <option key={contractType.id}>{contractType.name}</option>)}
          </select>
        );
      }
    }
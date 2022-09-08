import React from 'react';
import axios from 'axios';

export default class ContractTypeList extends React.Component {
    state = {
      contractTypes: []
    };

    componentDidMount() {
        axios.get(` http://localhost:8080/rest/entities/ContractType`).then(res => {
          const contractTypes = res.data;
          this.setState({ contractTypes });
        });
      }


      render() {
        return (
          <select id="inputState" class="form-select">
            {this.state.contractTypes.map(contractType => <option>{contractType.name}</option>)}
          </select>
        );
      }
    }
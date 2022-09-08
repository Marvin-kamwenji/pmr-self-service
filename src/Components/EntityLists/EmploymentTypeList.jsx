import React from 'react';
import axios from 'axios';

export default class EmploymentTypeList extends React.Component {
    state = {
      employmentTypes: []
    };

    componentDidMount() {
        axios.get(` http://localhost:8080/rest/entities/EmploymentCategory`).then(res => {
          const employmentTypes = res.data;
          this.setState({ employmentTypes });
        });
      }


      render() {
        return (
          <select id="inputState" class="form-select">
            {this.state.employmentTypes.map(employmentType => <option>{employmentType.name}</option>)}
          </select>
        );
      }
    }
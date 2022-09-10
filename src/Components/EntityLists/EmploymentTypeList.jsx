import React from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8080/rest/entities/EmploymentCategory";
export default class EmploymentTypeList extends React.Component {
    state = {
      employmentTypes: []
    };

    componentDidMount() {
        axios.get(baseURL).then(res => {
          const employmentTypes = res.data;
          this.setState({ employmentTypes });
        });
      }


      render() {
        return (
          <select id="inputState" className="form-select">
            {this.state.employmentTypes.map(employmentType => <option key={employmentType.id}>{employmentType.name}</option>)}
          </select>
        );
      }
    }
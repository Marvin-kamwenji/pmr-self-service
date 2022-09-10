import React from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8080/rest/entities/ServiceProviders";

export default class TenantServiceProvidersList extends React.Component {
    state = {
      serviceProviders: []
    };

    componentDidMount() {
        axios.get(baseURL).then(res => {
          const serviceProviders = res.data;
          this.setState({ serviceProviders });
        });
      }

      render() {
        return (
          <select id="inputState" className="form-select">
            {this.state.serviceProviders.map(serviceProvider => <option key={serviceProvider.id}>{serviceProvider.name}</option>)}
          </select>

        );
      }
    }

import React from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8080/rest/entities/IdentificationDocuments";

export default class IdentificationDocumentsList extends React.Component {
    state = {
      documents: []
    };

    componentDidMount() {
        axios.get(baseURL).then(res => {
          const documents = res.data;
          this.setState({ documents });
        });
      }

      render() {
        return (
          <select id="inputState" className="form-select">
            {this.state.documents.map(document => <option key={document.id}>{document.identificationName}</option>)}
          </select>

        );
      }
    }

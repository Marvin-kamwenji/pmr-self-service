import React from 'react';
import axios from 'axios';

export default class IdentificationDocumentsList extends React.Component {
    state = {
      documents: []
    };

    componentDidMount() {
        axios.get(`http://localhost:8080/rest/entities/IdentificationDocuments`).then(res => {
          const documents = res.data;
          this.setState({ documents });
        });
      }

      render() {
        return (
          <select id="inputState" class="form-select">
            {this.state.documents.map(document => <option>{document.identificationName}</option>)}
          </select>

        );
      }
    }

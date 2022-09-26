import React, { Component } from 'react';
import NavBar from '../Components/Common/NavBar';
import {Routes as Router, Route} from 'react-router-dom';
import history from './history';
import MainPage from '../Components/MainPage';
import LandLordRegistration from '../Components/Registration/LandLordRegistration';
import TenantRegistration from '../Components/Registration/TenantRegistration';
import TenantTrial from '../Components/Tenant/TenantTrial';

export default class Routes extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <Router history={history}>
                <Route>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/tenantRegistration' element={<TenantRegistration />} />
                    <Route path='/tenantTrial' element={<TenantTrial />} />
                    <Route path='/landlordRegistration' element={<LandLordRegistration />} />
                </Route>
            </Router>
        </div>      
    )
  }
}

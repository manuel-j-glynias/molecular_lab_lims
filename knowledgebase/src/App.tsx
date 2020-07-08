import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LogInContainer from "./components/Login/index";
import {UserContentProvider} from "./context/UserContentContext"
import Navbar from "./components/layout/Navbar"
import GenesContainer from "./components/Genes/GenesContainer/GenesContainer";
import MarkersContainer from "./components/Markers/MarkersContainer/MarkersContainer";
import DrugsContainer from "./components/Drugs/DrugsContainer/DrugsContainer";

import Landing from "./components/layout/Landing"
import './App.css';
import DiseasesContainer from "./components/Diseases/DiseasesContainer/DiseasesContainer";

const App = () => {
    const [logged_in, set_logged_in] = React.useState(false);

    return (
        <UserContentProvider>
            <Router>
                <Fragment>
                    <Navbar logged_in={logged_in} set_logged_in={set_logged_in}/>
                    <Route exact path='/' render={() => <Landing  logged_in={logged_in} />}/>
                    <section className='container'>
                        <Switch>
                            <Route exact path='/login' render={() => <LogInContainer logged_in={logged_in} set_logged_in={set_logged_in} />} />
                            <Route exact path="/genes" render={() => <GenesContainer logged_in={logged_in}/>}/>
                            <Route exact path="/markers" render={() => <MarkersContainer logged_in={logged_in}/>}/>
                            <Route exact path="/drugs" render={() => <DrugsContainer logged_in={logged_in}/>}/>
                            <Route exact path="/diseases" render={() => <DiseasesContainer logged_in={logged_in}/>}/>
                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </UserContentProvider>
    )

}

export default App;

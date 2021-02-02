import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LogInContainer from "./components/Login/index";
import Navbar from "./components/layout/Navbar"

import Landing from "./components/layout/Landing"
import './App.css';
import PhysiciansContainer from "./components/Physicians";
import TestsContainer from "./components/Tests";
import OrdersContainer from "./components/Orders";
import CaseCreateWrapper from "./components/CaseCreate/CaseCreateWrapper";
import NewSamplesContainer from "./components/NewSamples";
import SlideQCContainer from "./components/SlideQC";
import NGSCasesContainer from "./components/NGSCases";
import BCR_ABLCasesContainer from "./components/BCR_ABL"
import InquiryContainer from "./components/Inquiry";
import ResolveSamplesContainer from "./components/ResolveSamples";
import UsersContainer from "./components/Users";

const App = () => {
    const [logged_in, set_logged_in] = React.useState(false);
    const [user_name, set_user_name] = React.useState('');
    const [user_graph_id, set_user_graph_id] = React.useState('');
    const [user_can_edit_users, set_user_can_edit_users] = React.useState(false);
    const [user_can_edit_orders, set_user_can_edit_orders] = React.useState(false);
    const [user_can_edit_physicians, set_user_can_edit_physicians] = React.useState(false);
    const [user_can_edit_tests, set_user_can_edit_tests] = React.useState(false);
    const [user_can_qc, set_user_can_qc] = React.useState(false);

    return (
            <Router>
                <Fragment>
                    <Navbar logged_in={logged_in} set_logged_in={set_logged_in} canAdmin={user_can_edit_users} canQC={user_can_qc}/>
                    <Route exact path='/' render={() => <Landing  logged_in={logged_in} canEditUsers={user_can_edit_users} canQC={user_can_qc} />}/>
                    <section className='container'>
                        <Switch>
                            <Route exact path='/login' render={() => <LogInContainer logged_in={logged_in} set_logged_in={set_logged_in}
                                                                                     set_user_name={set_user_name} set_user_graph_id={set_user_graph_id}
                                                                                     set_user_can_edit_orders={set_user_can_edit_orders} set_user_can_edit_physicians={set_user_can_edit_physicians}
                                                                                     set_user_can_edit_tests={set_user_can_edit_tests} set_user_can_edit_users={set_user_can_edit_users} set_user_can_qc={set_user_can_qc}
                                    />} />
                            <Route exact path="/physicians" render={() => <PhysiciansContainer logged_in={logged_in} user_can_edit_physicians={user_can_edit_physicians}/>}/>
                            <Route exact path="/tests" render={() => <TestsContainer logged_in={logged_in}/>}/>
                            <Route exact path="/users" render={() => <UsersContainer logged_in={logged_in}/>}/>
                            <Route exact path="/orders" render={() => <OrdersContainer logged_in={logged_in} user_name={user_name} user_graph_id={user_graph_id} user_can_edit_orders={user_can_edit_orders}/>}/>
                            <Route exact path="/samples" render={() => <NewSamplesContainer logged_in={logged_in} user_name={user_name} user_graph_id={user_graph_id}  user_can_edit_orders={user_can_edit_orders}/>}/>
                            <Route exact path="/qc" render={() => <SlideQCContainer logged_in={logged_in} user_name={user_name} user_graph_id={user_graph_id}/>}/>
                            <Route exact path="/resolve_samples" render={() => <ResolveSamplesContainer logged_in={logged_in} user_name={user_name} user_graph_id={user_graph_id}/>}/>
                            <Route exact path="/cases" render={() => <CaseCreateWrapper logged_in={logged_in} user_name={user_name} user_graph_id={user_graph_id}/>}/>
                            <Route exact path="/ngs_clonality" render={() => <NGSCasesContainer logged_in={logged_in} user_name={user_name} user_graph_id={user_graph_id}/>}/>
                            <Route exact path="/bcr_abl" render={() => <BCR_ABLCasesContainer logged_in={logged_in} user_name={user_name} user_graph_id={user_graph_id}/>}/>
                            <Route exact path="/inquiry" render={() => <InquiryContainer logged_in={logged_in} user_name={user_name} user_graph_id={user_graph_id}/>}/>


                            {/*<Route exact path="/diseases" render={() => <DiseasesContainer logged_in={logged_in}/>}/>*/}
                        </Switch>
                    </section>
                </Fragment>
            </Router>
    )

}

export default App;

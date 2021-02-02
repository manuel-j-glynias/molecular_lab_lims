import React, {Fragment} from 'react'
import {Link} from "react-router-dom";

interface Props {
    logged_in: boolean;
    canEditUsers: boolean;
    canQC: boolean;
}

const Landing: React.FC<Props> = ({logged_in,canEditUsers,canQC} : Props) => {

    // if(isAuthenticated){
    //     return <Redirect to='/dashboard' />
    // }

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Roswell Park MolDX Lab LIMS</h1>
                    <div className="buttons">
                        {logged_in ?
                            <Fragment>
                            <div className="landing_buttons">
                                <Link to="/orders" className="btn"><i className="far fa-folders"></i>{' '}New Orders</Link>
                                <Link to="/samples" className="btn"><i className="fal fa-disease"></i>{' '}Pending Samples</Link>
                                {canQC && <Link to="/qc" className="btn"><i className="fad fa-microscope"></i>{' '}Slide QC</Link> }
                                <Link to="/resolve_samples" className="btn"><i className="fab fa-resolving"></i>{' '}Resolve Samples</Link>
                                <Link to="/cases" className="btn"><i className="far fa-briefcase-medical"></i>{' '}Create Cases</Link>
                             </div>
                            <div className="landing_buttons">
                                <Link to="/bcr_abl" className="btn"><i className="fas fa-code-merge"></i>{' '}BCR-ABL</Link>
                                <Link to="/ngs_clonality" className="btn"><i className="fal fa-project-diagram"></i>{' '}NGS/Clonality</Link>

                            </div>
                                <div className="landing_buttons">
                                    <Link to="/instruments" className="btn"><i className="fad fa-computer-classic"></i>{' '}Instruments</Link>
                                    <Link to="/reagents" className="btn"><i className="fas fa-vials"></i>{' '}Reagents</Link>
                                    <Link to="/assays" className="btn"><i className="fas fa-vial"></i>{' '}Assays</Link>
                                </div>

                                <div className="landing_buttons">
                                    <Link to="/inquiry" className="btn"><i className="far fa-question"></i>{' '}Inquiry</Link>
                                    <Link to="/inventory" className="btn"><i className="fad fa-inventory"></i>{' '}Storage</Link>
                                    <Link to="/audit" className="btn"><i className="fas fa-abacus"></i>{' '}Audit</Link>
                                     <Link to="/tests" className="btn"><i className="fad fa-clipboard-list"></i>{' '}Tests</Link>
                                    <Link to="/physicians" className="btn"><i className="fal fa-user-md"></i>{' '}Physicians</Link>
                                    {canEditUsers && <Link to="/users" className="btn"><i className="far fa-user-friends"></i>{' '}Users</Link> }

                                </div>
                            </Fragment>
                            : <Link to="/login" className="Login__btn btn-primary">Log In</Link>}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
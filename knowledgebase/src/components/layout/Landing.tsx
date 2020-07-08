import React from 'react'
import {Link} from "react-router-dom";

interface Props {
    logged_in: boolean;
}

const Landing: React.FC<Props> = ({logged_in} : Props) => {

    // if(isAuthenticated){
    //     return <Redirect to='/dashboard' />
    // }

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">OmniSeq Knowledgebase</h1>
                    <p className="lead">Create and Edit Omniseq Content</p>
                    <div className="buttons">
                        {logged_in ?
                            <div>
                                <Link to="/genes" className="btn"><i className="fas fa-dna"></i>{' '}Genes</Link>
                                <Link to="/markers" className="btn"><i className="fas fa-map-marker-plus"></i>{' '}Markers</Link>
                                <Link to="/drugs" className="btn"><i className="fas fa-pills"></i>{' '}Drugs</Link>
                                <Link to="/diseases" className="btn"><i className="far fa-disease"></i>{' '}Diseases</Link>
                            </div>
                            : <Link to="/login" className="btn">Log In</Link>}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
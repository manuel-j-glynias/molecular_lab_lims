import React, { Fragment } from 'react'
import {Link} from "react-router-dom";
import logo from './small_rpci_logo.png';


interface Props {
    logged_in: boolean;
    set_logged_in: (newloggedIn: boolean) => void;
    canAdmin: boolean;
    canQC: boolean;
}

const Navbar: React.FC<Props> = ({logged_in, set_logged_in,canAdmin,canQC} : Props) => {
    const logout = async () => {
        console.log('logout')
        set_logged_in(false)
    }
    const authLinks = (
        <ul>
            <li><Link to="/">
                <i className="fal fa-home"></i>{' '}
                Home</Link>
            </li>
            <li><Link to="/orders">
                <i className="far fa-folders"></i>{' '}
                New Orders</Link>
            </li>
            <li><Link to="/samples">
                <i className="fal fa-disease"></i>{' '}
                Pending Samples</Link>
            </li>
            {canQC && <li><Link to="/qc">
                <i className="fad fa-microscope"></i>{' '}
                Slide QC</Link>
            </li> }
            <li><Link to="/resolve_samples">
                <i className="fab fa-resolving"></i>{' '}
                Resolve Samples</Link>
            </li>
            <li><Link to="/cases">
                <i className="far fa-briefcase-medical"></i>{' '}
                Create Cases</Link>
            </li>
            <li><Link to="/bcr_abl">
                <i className="fas fa-code-merge"></i>{' '}
                BCR-ABL</Link>
            </li>
            <li><Link to="/ngs_clonality">
                <i className="fal fa-project-diagram"></i>{' '}
                NGS/Clonality</Link>
            </li>
            {/*<li><Link to="/ngs">*/}
            {/*    <i className="fas fa-dna"></i>{' '}*/}
            {/*    NGS</Link>*/}
            {/*</li>*/}
            {/*<li><Link to="/tests">*/}
            {/*    <i className="fad fa-clipboard-list"></i>{' '}*/}
            {/*    Tests</Link>*/}
            {/*</li>*/}
            <li><Link to="/physicians">
                <i className="fal fa-user-md"></i>{' '}
                Physicians</Link>
            </li>
            <li>
                <a onClick={logout} href='#!' >
                    <i className='fas fa-sign-out-alt'></i>{' '}
                    Logout</a>
            </li>
        </ul>

    );
    const guestLinks = (
        <ul>
            <li><Link to="/login">Login</Link></li>
        </ul>

    );
    return (
        <nav className="navbar">
            <h1>
                <a href="https://www.roswellpark.org" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt=""/>
                </a>
            </h1>
            { <Fragment>{ logged_in ? authLinks : guestLinks}</Fragment>}
        </nav>
    )
}

export default Navbar
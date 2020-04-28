import React, { Fragment } from 'react'
import {Link} from "react-router-dom";
import logo from './ominseq-logo.png';


interface Props {
    logged_in: boolean;
    set_logged_in: (newloggedIn: boolean) => void;
}

const Navbar: React.FC<Props> = ({logged_in, set_logged_in} : Props) => {
    const logout = async () => {
        console.log('logout')
        set_logged_in(false)
    }
    const authLinks = (
        <ul>
            <li><Link to="/drugs">
                <i className="fas fa-pills"></i>{' '}
                Drugs</Link>
            </li>
            <li><Link to="/markers">
                <i className="fas fa-map-marker-plus"></i>{' '}
                Markers</Link>
            </li>
            <li><Link to="/genes">
                <i className="fas fa-dna"></i>{' '}
                Genes</Link>
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
        <nav className="navbar bg-dark">
            <h1>
                <a href="https://www.omniseq.com/" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt=""/>
                </a>
            </h1>
            { <Fragment>{ logged_in ? authLinks : guestLinks}</Fragment>}
        </nav>
    )
}

export default Navbar
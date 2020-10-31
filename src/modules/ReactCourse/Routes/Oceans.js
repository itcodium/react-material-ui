
import React from 'react';
import { NavLink } from "react-router-dom";
import LoginService from '../../../Services/LoginService';
import { Redirect } from 'react-router-dom';
class Oceans extends React.Component {
    render() {
        if (!LoginService.isLoggedIn()) {
            return (
                <Redirect to='/login' />
            );
        } else {
            return (
                <div
                    className='ui text container'>
                    {this.props.match.params.name}
                    <h2 className='ui dividing header'>
                        Which body of water?
            </h2>
                    <ul>
                        <li>
                            <NavLink to='/oceans/atlantic'>
                                <code>/atlantic</code>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/oceans/pacific'>
                                <code>/pacific</code>
                            </NavLink>
                        </li>
                    </ul>
                    <hr />
                </div>
            )
        }
    }
}

export default Oceans;
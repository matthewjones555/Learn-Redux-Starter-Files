/**
 * Created by matthew.jones on 10/21/2016.
 */
import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
            </div>
        )
    }
});

export default Main;
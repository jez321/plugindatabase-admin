import React, { useEffect, useState } from 'react';
import api from '../../api/api'

const Plugins = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortDir, setSortDir] = useState('desc');
    const [plugins, setPlugins] = useState([]);
    useEffect(() => {
        api.get(`plugins?search=${searchTerm}&sortdir=${sortDir}`).then((response) => {
            setPlugins(response.data);
        });
    }, [searchTerm, sortDir]);
    const pluginComponents = plugins.map(c => {
        return <tr><td>{c.name}</td><td>{c.company}</td><td>{new Date(c.created.replace(' ', 'T')).toLocaleDateString()}</td><td>{new Date(c.updated.replace(' ', 'T')).toLocaleDateString()}</td><td><button className="space">Edit</button><button>Delete</button></td></tr>
    })
    return (
        <React.Fragment>
            <h2>Plugins</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pluginComponents}
                </tbody>
            </table>
        </React.Fragment>);
}

export default Plugins;

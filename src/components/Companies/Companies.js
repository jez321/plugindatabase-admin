import React, { useEffect, useState } from 'react';
import api from '../../api/api'

const Companies = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortDir, setSortDir] = useState('desc');
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        api.get(`deals?search=${searchTerm}&sortdir=${sortDir}`).then((response) => {
            setCompanies(response.data);
        });
    }, [searchTerm, sortDir]);
    const companyComponents = companies.map(c => {
        return <tr><td>{c.name}</td><td><button className="space">Edit</button><button>Delete</button></td></tr>
    })
    return (
        <React.Fragment>
            <h2>Companies</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companyComponents}
                </tbody>
            </table>
        </React.Fragment>);
}

export default Companies;

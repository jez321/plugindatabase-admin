import React, { useEffect, useState } from 'react';
import api from '../../api/api'

const Deals = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortDir, setSortDir] = useState('desc');
    const [deals, setDeals] = useState([]);
    useEffect(() => {
        api.get(`deals?search=${searchTerm}&sortdir=${sortDir}`).then((response) => {
            setDeals(response.data);
        });
    }, [searchTerm, sortDir]);
    const dealComponents = deals.map(c => {
        return (
            <tr>
                <td>{c.name}</td>
                <td>{c.company}</td>
                <td>{c.category}</td>
                <td class="number-column">{`$${c.price}`}</td>
                <td>{c.description}</td>
                <td>{c.start_date ? new Date(c.start_date.replace(' ', 'T')).toLocaleDateString() : ''}</td>
                <td>{c.end_date ? new Date(c.end_date.replace(' ', 'T')).toLocaleDateString() : ''}</td>
                <td><a target="_blank" href={c.link.url}>{c.link.title}</a></td>
                <td>{new Date(c.created.replace(' ', 'T')).toLocaleDateString()}</td>
                <td>{new Date(c.updated.replace(' ', 'T')).toLocaleDateString()}</td>
                <td className="actions"><button className="space">Edit</button><button>Delete</button></td>
            </tr>
        )
    })
    return (
        <React.Fragment>
            <h2>Deals</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Plugin</th>
                        <th>Company</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Link</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dealComponents}
                </tbody>
            </table>
        </React.Fragment>);
}

export default Deals;

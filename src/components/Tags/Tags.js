import React, { useEffect, useState } from 'react';
import api from '../../api/api'

const Tags = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortDir, setSortDir] = useState('desc');
    const [tags, setTags] = useState([]);
    useEffect(() => {
        api.get(`tags?search=${searchTerm}&sortdir=${sortDir}`).then((response) => {
            setTags(response.data);
        });
    }, [searchTerm, sortDir]);
    const tagComponents = tags.map(c => {
        return (
            <tr>
                <td>{c.name}</td> 
                <td className="actions"><button className="space">Edit</button><button>Delete</button></td>
            </tr>
        )
    })
    return (
        <React.Fragment>
            <h2>Tags</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tagComponents}
                </tbody>
            </table>
        </React.Fragment>);
}

export default Tags;

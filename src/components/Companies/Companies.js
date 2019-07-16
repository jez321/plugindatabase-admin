import React, { useEffect, useState } from 'react';
import api from '../../api/api'
import Modal from 'react-modal';

const customStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const Companies = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortDir, setSortDir] = useState('desc');
    const [companies, setCompanies] = useState([]);
    const [modalTitle, setModalTitle] = useState('');
    useEffect(() => {
        api.get(`companies?search=${searchTerm}&sortdir=${sortDir}`).then((response) => {
            setCompanies(response.data);
        });
    }, [searchTerm, sortDir]);
    const edit = () => {
        setModalTitle('Edit');
        setModalOpen(true);
    }
    const stopEdit = () => {
        setModalOpen(false);
    }
    const add = () => {
        setModalTitle('Add');
        setModalOpen(true);
    }
    const companyComponents = companies.map(c => {
        return (
            <tr key={c.id_company}>
                <td>{c.name}</td>
                <td>{new Date(c.created.replace(' ', 'T')).toLocaleDateString()}</td>
                <td>{new Date(c.updated.replace(' ', 'T')).toLocaleDateString()}</td>
                <td><button onClick={() => edit()} className="space">Edit</button><button>Delete</button></td>
            </tr>
        )
    })
    return (
        <React.Fragment>
            <Modal
                isOpen={modalOpen}
                contentLabel="Example Modal"
                style={customStyle}
            >
                <div style={{ display: 'flex', minWidth: '450px', justifyContent: 'space-between' }}>
                    <h3 style={{ margin: 0 }}>{modalTitle}</h3> <button onClick={() => setModalOpen(false)}>X</button>
                </div>
            </Modal>
            <h2>Companies</h2>
            <button onClick={() => add()} className="space">Add</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companyComponents}
                </tbody>
            </table>
        </React.Fragment >);
}

export default Companies;

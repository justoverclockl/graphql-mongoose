import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import {FaUser} from 'react-icons/fa'
import {useMutation} from "@apollo/client";

const AddClientModal = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <div className="d-flex align-items-center">
                    <FaUser className="icon" />
                    <div>Add Client</div>
                </div>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            onChange={(e) => setFormData({
                                ...formData,
                                name: e.target.value
                            })}
                        />
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={(e) => setFormData({
                                ...formData,
                                email: e.target.value
                            })}
                        />
                        <label className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            onChange={(e) => setFormData({
                                ...formData,
                                phone: e.target.value
                            })}
                        />
                        <Button type="submit" className="mt-4" variant="primary">
                            Add to DB
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddClientModal;
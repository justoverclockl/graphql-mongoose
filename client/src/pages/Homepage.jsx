import React from 'react';
import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";

const Homepage = () => {
    return (
        <>
            <div className="d-flex gap-2 mb-4">
                <AddClientModal />
            </div>
            <Projects />
            <Clients />
        </>
    );
};

export default Homepage;
import React from 'react';
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";

const Projects = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS)

    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>


    return (
        <>

        </>
    );
};

export default Projects;
import React from 'react';
import Spinner from "./Spinner";
import {useQuery} from "@apollo/client";
import {GET_PROJECTS} from "../queries/projectQueries";
import {nanoid} from "nanoid";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const {loading, error, data} = useQuery(GET_PROJECTS)

    if (loading) return <Spinner/>
    if (error) return <p>Something went wrong</p>

    console.log(data)


    return (
        <>
            {data.projects.length > 0 ? (
                <div className="row mt-5">
                    { data.projects.map((project) => {
                        return (
                            <ProjectCard key={nanoid()} project={project} />
                        )
                    })}
                </div>
                )
                :
                (
                    <p>No projects</p>
                )}
        </>
    );
};

export default Projects;
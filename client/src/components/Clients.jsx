import React from 'react';
import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";
import { nanoid } from 'nanoid'



const Clients = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS)

    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>

    return (
        <>
            {!loading && !error && (
                <table className="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.clients && data.clients.map((client) => {
                        return (
                            <ClientRow key={nanoid()} client={client} />
                        )
                    })}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Clients;
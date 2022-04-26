import React from "react";

const Table = (props) => {

    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Value Min</th>
                    <th>Money</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>opciones</th>
                </tr>
            </thead>
            <tbody>
                {props.funds.body.map(cl => {
                    return (
                    <tr key={cl._id}>
                        <td>{cl._id}</td>
                        <td>{cl.name}</td>
                        <td>{cl.value_min}</td>
                        <td>{cl.money}</td>
                        <td>{cl.category}</td>
                        <td>{cl.date}</td>
                        <td>{cl.date}</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    );
}

export default Table;
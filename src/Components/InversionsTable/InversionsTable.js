import React from 'react';

export default function InversionsTable(props) {
    return (
        <div className="col-9">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {props.inversions.map((item, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>{item.created}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

export default class Charts extends React.Component {

    render() {
        const dataBar = {
            labels: this.props.labels,
            datasets: [
                {
                    label: 'Monto Invertido',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: this.props.data
                }
            ]
        };

        const dataPie = {
            labels: this.props.labels,
            datasets: [{
                data: this.props.data,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        }

        return (
            <div className="row">
                <div className="col-6">
                    <h2>Inversiones</h2>
                    <Bar data={dataBar} />
                </div>
                <div className="col-6">
                    <h2>Inversiones</h2>
                    <Pie data={dataPie} />
                </div>
            </div>
        );
    }
}
import React from 'react';
import { useEffect, useState } from 'react';
import NewInversionModal from '../NewInversionModal/NewInversionModal';

export default function AmountDisplay(props) {
    const [amount, setAmount] = useState({});

    async function fetchAmount() {
        const response = await fetch('http://localhost:3000/inversiones/calculomonto');
        const data = await response.json();
        setAmount(data.number);
    }

    useEffect(() => {
        fetchAmount();
    }, {});

    function updateAmount(inversion) {
        let newAmount = parseInt(amount) - parseInt(inversion.amount);
        if (newAmount < 0) {
            alert('No tienes suficiente dinero.');
            return
        }
        setAmount(newAmount);
        props.testState(inversion);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">$</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                            value={amount}>
                        </input>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModal">Nueva Inversión</button>
                </div>
                <NewInversionModal balance={amount} onClick={(i) => updateAmount(i)} />
            </div>
        </div>

    );
}
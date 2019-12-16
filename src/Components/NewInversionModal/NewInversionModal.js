import React from 'react';

export default class NewInversionModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inversion: {
                amount: '',
                name: '',
            }
        }
    }

    componentDidMount() {
        let inversion = {
            name: '',
            amount: ''
        }
        this.setState({ inversion: inversion });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.balance != this.props.balance) {
            let inversion = {
                name: '',
                amount: ''
            }
            this.setState({ inversion: inversion });
            console.log('genial');
        }
        console.log('Nogenial');
    }

    handleInputChange(event) {
        let name = event.target.name;
        let newInversion = this.state.inversion;
        newInversion[name] = event.target.value;
        this.setState({ inversion: newInversion });
    }

    render() {

        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Nueva Inversión</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-left">
                            <form>
                                <div className="form-group">
                                    <label for="formGroupExampleInput">Empresa</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="formGroupExampleInput"
                                        name="name"
                                        value={this.state.inversion.name}
                                        onChange={(e) => this.handleInputChange(e)}
                                    />
                                    <label>{'Dinero disponible para invertir: $' + this.props.balance}</label>
                                </div>
                                <div className="form-group">
                                    <label for="formGroupExampleInput2">Monto</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="formGroupExampleInput2"
                                        name="amount"
                                        value={this.state.inversion.amount}
                                        onChange={(e) => this.handleInputChange(e)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={() => this.props.onClick(this.state.inversion)} data-dismiss="modal">Invertir</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
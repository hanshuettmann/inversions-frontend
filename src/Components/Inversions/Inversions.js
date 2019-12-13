import React from 'react';
import InversionsTable from '../InversionsTable/InversionsTable';
import AmountDisplay from '../AmountDisplay/AmountDisplay';

export default class Inversions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inversions: {
                currentPage: 1,
                quantity: 10,
                result: [],
                total: null,
                totalPages: null
            }
            //memeCreatedId: null,
            //isRedirect: false
        }
    }

    async fetchInversions() {
        const response = await fetch('http://localhost:3000/inversiones');
        const data = await response.json();
        this.setState({
            inversions: {
                result: data
            }
        });
        console.log(this.state.inversions);
    }

    componentWillMount() {
        this.fetchInversions();
    }

    testState(inversion) {
        console.log(inversion);
    }

    render() {
        return (
            <div>
                <AmountDisplay testState={(i) => this.testState(i)} />
                <InversionsTable inversions={this.state.inversions.result} />
            </div>
        );
    }

}
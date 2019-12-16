import React from 'react';
import InversionsTable from '../InversionsTable/InversionsTable';
import AmountDisplay from '../AmountDisplay/AmountDisplay';
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination';

export default class Inversions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inversions: {
                currentPage: 1,
                quantity: 5,
                result: [],
                total: null,
                totalPages: null
            },
            dateRange: {
                startDate: '',
                endDate: ''
            }
            //memeCreatedId: null,
            //isRedirect: false
        }
    }

    async fetchInversions() {
        let url = 'http://localhost:3000/inversiones?quantity=' + this.state.inversions.quantity + '&page=' + this.state.inversions.currentPage;
        if (this.state.dateRange.endDate != '') {
            url = url + '&startDate=' + this.state.dateRange.startDate + '&endDate=' + this.state.dateRange.endDate;
        }
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            inversions: data
        });
        console.log(url, this.state);
    }

    componentDidMount() {
        this.fetchInversions();
    }

    async testState(inversion) {
        const response = await fetch('http://localhost:3000/inversiones', {
            method: 'POST',
            body: JSON.stringify(inversion), // data can be 'string' or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json();
        console.log(res);
        this.fetchInversions();
    }

    /*async postMeme(newMeme) {
        const response = await fetch('http://localhost:3000/memes', {
            method: 'POST',
            body: JSON.stringify(newMeme), // data can be 'string' or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json();
        console.log(res);
        this.handlePagination(this.state.memes.currentPage);
        this.setState({ memeCreatedId: res._id, isRedirect: true });
    }*/

    dateRange(range) {
        if (range.endDate > range.startDate) {
            let newState = this.state.inversions;
            newState.currentPage = 1;
            this.setState({
                inversions: newState,
                dateRange: {
                    startDate: range.startDate.format('YYYY-MM-DD'),
                    endDate: range.endDate.format('YYYY-MM-DD')
                }
            }, () => this.fetchInversions());
            //this.fetchInversions();
        }
    }

    fetchPage(index) {
        let updateState = this.state.inversions;
        updateState.currentPage = index;
        this.setState({
            inversions: updateState
        }, () => this.fetchInversions());
    }

    render() {
        return (
            <div>
                <AmountDisplay testState={(i) => this.testState(i)} />
                <div className="row justify-content-center">
                    <Filters handleSelect={(r) => this.dateRange(r)} />
                    <InversionsTable inversions={this.state.inversions.result} />
                    <Pagination
                        currentPage={this.state.inversions.currentPage}
                        totalPages={this.state.inversions.totalPages}
                        handlePagination={(index) => this.fetchPage(index)} />
                </div>
            </div>
                );
            }
        
}
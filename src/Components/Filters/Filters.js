import React from 'react';
import { DateRange, DateRangePicker } from 'react-date-range';

export default class Filters extends React.Component {

    /*handleSelect(test) {
        if (test.endDate > test.startDate) {
            this.setState({
                dateRange: {
                    startDate: test.startDate.format('YYYY-MM-DD'),
                    endDate: test.endDate.format('YYYY-MM-DD')
                }
            });
        }
        // An object with two keys,
        // 'startDate' and 'endDate' which are Momentjs objects.
    }*/

    render() {
        return (
            <div className="col-3">
                <DateRange
                    onChange={(r) => this.props.handleSelect(r)}
                    calendars={1}
                />
            </div>
        )
    }
}
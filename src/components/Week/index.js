import React, {Component} from 'react';
import Day from '../Day';

export default class Week extends Component {
    constructor(props) {
        super(props);
    }

    weekRender = () => {
        const {week} = this.props;
        const days = [];
        for (let day of week) {
            days.push(<Day
                {...this.props}

                key={day.format('w-d')}
                day={day}
            />);
        }

        return days;
    };

    render() {
        return (<tr>
                {this.weekRender()}
            </tr>
        );
    }

}
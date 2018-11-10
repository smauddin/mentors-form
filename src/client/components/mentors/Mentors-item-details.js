import React from 'react';
import MentorsCard from './MentorsCard';

class MentorsItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDetailedData: "",
            isLoading: true,
            isActive: true
        }
    }
    componentDidMount() {
        fetch(`/api/mentors/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(response => this.setState({
                itemDetailedData: response,
                isLoading: false
            }));
    }
    render() {
        if (!this.state.isLoading && this.state.isActive) {
            return (
                <div>
                    <a href={`/Mentors`} className="btn btn-outline-danger btn-sm">Go back to Mentors</a>
                    <MentorsCard mentorsItem={this.state.itemDetailedData} />
                </div>
            );
        } else if (!this.state.isLoading && !this.state.isActive) {
            return (
                <div>
                    <h4>Item Successfully deleted</h4>
                    <br />
                    <a href="/Mentors"> Go Back</a>
                </div>);
        }
        else {
            return (<li>Is loading . . . . .</li>);
        }
    }
}

export default MentorsItemDetails;
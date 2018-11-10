import React from 'react';

class MentorsCard extends React.Component {
    render() {
        const item = this.props.mentorsItem;
        return (
            <div key={item.id} className="card mb-4">
                <div className="card-header">
                    <h2 className="card-title pricing-card-title"> {item.first_name}</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <div><strong>Name:</strong> {item.first_name}</div>
                            <div><strong>Contact Email:</strong> {item.email}</div>
                            <div><strong>Contact Number:</strong> {item.contact_phone}</div>
                            <div><strong>Gender</strong> {item.gender}</div>
                            <div><strong>Mentor Description </strong> {item.mentor_description}</div>
                            <div><strong>Languages </strong> {item.languages}</div>
                            <div><strong>Availability </strong> {item.availability}</div>
                            <div><strong>Offering</strong> {item.offering}</div>
                            <div><strong>Area Location </strong> {item.area_location}</div>
                            <div><strong>Preferred Meetign place: </strong> {item.preferred_meeting_place}</div>
                            <div><strong>Affiliation</strong> {item.affiliation}</div>

                        </div>
                        <div className="col-md-4">
                            <img className="my-0 font-weight-normal" src={item.profile_picture} width="100%" alt="Organization Logo" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MentorsCard;
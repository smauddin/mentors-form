import React, { Component } from 'react';
import MentorsCard from '../mentors/MentorsCard';

/*
TODOs
1. Call the server and save the data in the DB
  1.a Turn the form data into json object
  1.b Call the appropriate endpoint
2. Validation
*/
class MentorForm extends Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                mentorData: this.props.mentorData,
                displaySubmitForm: false,
                disPlayDetailsCard: true,
                isActive: true
            }
        } else {
            this.state = {
                mentorData: {
                    "first_name": "",
                    "last_name": "",
                    "email": "",
                    "gender": "",
                    "profile_picture": "",
                    "mentor_description": "",
                    "languages": "",
                    "availability": "",
                    "offering": "",
                    "area_location": "",
                    "preferred_meeting_place": "",
                    "affiliation": "",
                    "active": 1
                },
                displaySubmitForm: true,
                disPlayDetailsCard: false,
                isActive: true
            }
        }
    }

    updateField = (e) => {
        const { name, value } = e.target;

        this.setState({
            mentorData: {
                ...this.state.mentorData,
                [name]: value,
            }
        })
    }


    displaySubmitForm = () => {
        this.setState({
            displaySubmitForm: true
        });
    }

    deleteMentors = () => {
        console.log('deletingggggggggg');
        fetch(`/api/mentors/${this.props.match.params.id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(response => {
                console.log('delete :', response);
                this.setState({
                    isActive: false
                });
            })
    }


    // function for submitting request to the database to add or modify data

    submitForm = (e) => {
        e.preventDefault();

        let url = '', method = '';

        if (this.props.isEditing) {
            url = `/api/mentors/${this.props.match.params.id}`
            method = 'PUT';
        } else {
            url = `/api/mentors`
            method = 'POST';
        }

        fetch(url, {
            method,
            body: JSON.stringify(this.state.mentorData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                console.log('Success:', response);
                // TODO redirect to the Mentors list page (/Mentors)
                this.setState({
                    displaySubmitForm: false,
                    disPlayDetailsCard: false

                });
            })
            .catch(error => console.error('Error:', error));
    }

    render() {
        if (this.state.displaySubmitForm && this.state.isActive) {

            return (
                <form onSubmit={this.submitForm}>
                    <div className='form-group card px-lg-5'>
                        <h2 className='card-header mt-4'>
                            {`${this.props.isEditing ? "Edit" : "Add"} Mentor`}
                        </h2>
                        <div className='row mt-4'>

                            <div className='col'>
                                <label>
                                    First Name
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0' name="first_name" value={this.state.mentorData.first_name} onChange={this.updateField} />
                                </label>
                            </div>
                            <div className='col'>
                                <label>
                                    Last Name
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0' name="last_name" value={this.state.mentorData.last_name} onChange={this.updateField} />
                                </label>
                            </div>

                        </div>

                        <div className='row'>
                            <div className='col'>
                                <label>
                                    Email
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0 ' name="email" value={this.state.mentorData.email} onChange={this.updateField} />
                                </label>
                            </div>

                            <div className='col'>
                                <label>
                                    Gender
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0 ' name="gender" value={this.state.mentorData.gender} onChange={this.updateField} />
                                </label>
                            </div>
                        </div>
                        <div mt-3>
                            <label className=' mt-3'>
                                Profile Picture
                            <input className='form-control-file' type='file' name="profile_picture" value={this.state.mentorData.profile_picture} onChange={this.updateField} />
                            </label>
                        </div>
                        <div>
                            <label className=' mt-3'>
                                Mentor Description
                        <textarea className='form-control' rows='3' cols='67' name="mentor_description" value={this.state.mentorData.mentor_description} onChange={this.updateField} />
                            </label>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <label>
                                    Languages
                                <input className='form-control' name="languages" value={this.state.mentorData.languages} onChange={this.updateField} />
                                </label>
                            </div>
                            <div className='col'>
                                <label>
                                    Availability
                                <input className='form-control' name="availability" value={this.state.mentorData.availability} onChange={this.updateField} />
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label>
                                    Offering
                                <input className='form-control' name="offering" value={this.state.mentorData.offering} onChange={this.updateField} />
                                </label>
                            </div>
                            <div className='col'>
                                <label>
                                    Area Location
                                <input className='form-control' name="area_location" value={this.state.mentorData.area_location} onChange={this.updateField} />
                                </label>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <label>
                                    Preferred Meeting Place
                            <input className='form-control' name="preferred_meeting_place" value={this.state.mentorData.preferred_meeting_place} onChange={this.updateField} />
                                </label>
                            </div>
                            <div className='col'>
                                <label>
                                    Affiliation
                            <input className='form-control' name="affiliation" value={this.state.mentorData.affiliation} onChange={this.updateField} />
                                </label>
                            </div>
                        </div>
                        <div className='mb-4 mt-3'>
                            <button className='btn btn-warning' type="submit">Save</button>
                            <button className='btn btn-primary ml-4' type="cancel">Cancel</button>
                        </div>

                    </div>
                </form>

            );

        } else if (this.state.disPlayDetailsCard && this.state.isActive) {
            return (
                <div>
                    <div>
                        <button className="btn btn-outline-danger btn-sm" onClick={this.displaySubmitForm}> Update</button>
                        <button className="btn btn-outline-danger btn-sm" onClick={this.deleteMentors}> Delete</button>
                        <a href={`/Mentors`} className="btn btn-outline-danger btn-sm network-edit-button">Go Back to Networks</a>
                    </div>
                    <MentorsCard MentorsItem={this.state.mentorData} />
                </div>
            );
        } else if (!this.state.isActive) {
            return (
                <div>
                    <h3>Mentors successfully deleted</h3>
                    <a href={`/Mentors`} className="btn btn-outline-danger btn-sm">Go Back to Mentors</a>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>{`Successfully ${this.props.isEditing ? "Edited" : "Added"} Mentors`}</h1>
                    <br />
                    <button className="btn btn-outline-danger btn-sm" onClick={this.displaySubmitForm}> Update</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={this.deleteMentors}> Delete</button>
                    <a className="btn btn-outline-danger btn-sm network-edit-button" href="/Mentors/add">Add New Mentors</a>
                    <a href={`/Mentors`} className="btn btn-outline-danger btn-sm network-edit-button">Go Back to Mentors</a>
                    <MentorsCard MentorsItem={this.state.mentorData} />

                </div>);
        }

    }
}

export default MentorForm;
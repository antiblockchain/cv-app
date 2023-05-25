import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: "",
      email: "",
      phone: "",

      info: "",

      schoolName: "",
      studyTitle: "",
      yearsStudied: "",

      studies: "",

      company: "",
      position: "",
      tasks: "",
      yearsWorked: "",

      jobs: "",
    };
  }

  render() {
    return (
      <>
        <div className="all-info">
          <div className="general-container">
            <h2>General Info</h2>
            <form>
              <label>First Name:</label>
              <input
                type="text"
                required
                value={this.state.fName}
                onChange={(e) => {
                  this.setState({
                    fName: e.target.value,
                  });
                }}
              />
              <label>Last Name:</label>
              <input
                type="text"
                required
                value={this.state.lName}
                onChange={(e) => {
                  this.setState({
                    lName: e.target.value,
                  });
                }}
              />
              <label>Email:</label>
              <input
                type="text"
                required
                value={this.state.email}
                onChange={(e) => {
                  this.setState({
                    email: e.target.value,
                  });
                }}
              />
              <label>Phone Number:</label>
              <input
                type="text"
                required
                value={this.state.phone}
                onChange={(e) => {
                  this.setState({
                    phone: e.target.value,
                  });
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();

                  this.setState({
                    info: (
                      <>
                        <li>
                          {this.state.fName} {this.state.lName}
                        </li>
                        <li>Email: {this.state.email}</li>
                        <li>Phone: {this.state.phone}</li>
                      </>
                    ),
                  });
                }}
              >
                Submit general info
              </button>
            </form>
          </div>

          <div className="education-container">
            <h2>Education</h2>
            <form>
              <label>School Name:</label>
              <input
                type="text"
                required
                value={this.state.schoolName}
                onChange={(e) => {
                  this.setState({
                    schoolName: e.target.value,
                  });
                }}
              />
              <label>Title of study:</label>
              <input
                type="text"
                required
                value={this.state.studyTitle}
                onChange={(e) => {
                  this.setState({
                    studyTitle: e.target.value,
                  });
                }}
              />
              <label>Years Studied:</label>
              <input
                type="text"
                required
                value={this.state.yearsStudied}
                onChange={(e) => {
                  this.setState({
                    yearsStudied: e.target.value,
                  });
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();

                  let newStudies = (
                    <div className="studies">
                      <li>
                        {this.state.studyTitle}, {this.state.schoolName},{" "}
                        {this.state.yearsStudied}
                      </li>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.target.parentNode.removeChild(
                            e.target.parentNode.firstChild
                          );
                          e.target.parentNode.removeChild(
                            e.target.parentNode.firstChild
                          );
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );

                  this.setState({
                    studies: [...this.state.studies, newStudies],
                  });
                }}
              >
                Submit education
              </button>
            </form>
          </div>

          <div className="jobs-container">
            <h2>Job Experience</h2>
            <form>
              <label>Company:</label>
              <input
                type="text"
                required
                value={this.state.company}
                onChange={(e) => {
                  this.setState({
                    company: e.target.value,
                  });
                }}
              />
              <label>Position:</label>
              <input
                type="text"
                required
                value={this.state.position}
                onChange={(e) => {
                  this.setState({
                    position: e.target.value,
                  });
                }}
              />
              <label>Tasks:</label>
              <input
                type="text"
                required
                value={this.state.tasks}
                onChange={(e) => {
                  this.setState({
                    tasks: e.target.value,
                  });
                }}
              />

              <label>Years worked:</label>
              <input
                type="text"
                required
                value={this.state.yearsWorked}
                onChange={(e) => {
                  this.setState({
                    yearsWorked: e.target.value,
                  });
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();

                  let newJobs = (
                    <div className="jobs">
                      <li>
                        {this.state.position} at {this.state.company}.
                        {" " + this.state.yearsWorked}
                        {" years"}, {"tasks included "}
                        {this.state.tasks}.
                      </li>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.target.parentNode.removeChild(
                            e.target.parentNode.firstChild
                          );
                          e.target.parentNode.removeChild(
                            e.target.parentNode.firstChild
                          );
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );

                  this.setState({ jobs: [...this.state.jobs, newJobs] });
                }}
              >
                Submit job
              </button>
            </form>
          </div>
        </div>
        <div className="previews">
          <div className="general-info">
            <ul>{this.state.info}</ul>
          </div>
          <div className="education-experience">
            <ul>{this.state.studies}</ul>
          </div>
          <div className="jobs-experience">
            <ul>{this.state.jobs}</ul>
          </div>
        </div>
      </>
    );
  }
}

export default Info;

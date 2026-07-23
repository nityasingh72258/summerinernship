import React from 'react'


const jobs = [
  {
    id: 1,
    company: "Meta",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
    time: "5 days ago",
    role: "Frontend Engineer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$65/hour",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Amazon",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
    time: "2 weeks ago",
    role: "Backend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$70/hour",
    location: "Mumbai, India",
  },
  {
    id: 3,
    company: "Apple",
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969041.png",
    time: "3 weeks ago",
    role: "iOS Developer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$90/hour",
    location: "Mumbai, India",
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
    time: "10 days ago",
    role: "Machine Learning Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$110/hour",
    location: "Mumbai, India",
  },
];

function Cards() {
  return (
    <div className="container">
      {jobs.map((job) => (
        <div className="card" key={job.id}>
          <div className="top">
            <img src={job.logo} alt={job.company} className="logo" />

            <button className="save-btn">Save</button>
          </div>

          <div className="content">
            <div className="company">
              <h3>{job.company}</h3>
              <span>{job.time}</span>
            </div>

            <h2>{job.role}</h2>

            <div className="tags">
              <span>{job.type}</span>
              <span>{job.level}</span>
            </div>
          </div>

          <div className="bottom">
            <div>
              <h2>{job.salary}</h2>
              <p>{job.location}</p>
            </div>

            <button className="apply-btn">Apply Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
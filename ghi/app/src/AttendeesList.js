import React from 'react'

export const AttendeesList = (props) => {
  return (
    <div className="container">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Conference</th>
        </tr>
      </thead>
      <tbody>
        {props.attendees.map((attendee) => {
          return (
            <tr key={attendee.href}>
              <td>{attendee.name}</td>
              <td>{attendee.conference}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

import React from "react";

class LocationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        name: '',
        roomCount: '',
        city: '',
        states: []
    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleRoomChange = this.handleRoomChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}
async componentDidMount() {
    let stateUrl = "http://localhost:8000/api/states/"
    let stateResponse = await fetch(stateUrl);

    if (stateResponse.ok) {
        const data = await stateResponse.json();
        this.setState({states: data.states});

    }
}

handleNameChange(event) {
    this.setState({name: event.target.value})
}
handleRoomChange(event) {
    this.setState({roomCount: event.target.value})
}
handleCityChange(event) {
    this.setState({city: event.target.value})
}
handleStateChange(event) {
    this.setState({state: event.target.value})
}
  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    data.room_count = data.roomCount;
    delete data.roomCount;
    delete data.states;
    console.log(data);

    const locationUrl = 'http://localhost:8000/api/locations/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newLocation = await response.json();
      console.log(newLocation);

      const cleared = {
        name: '',
        roomCount: '',
        city: '',
        state: '',
      }
      this.setState(cleared)
    }
  }
  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new location</h1>
            <form id="create-location-form" onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleNameChange}
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleRoomChange}
                  placeholder="Room count"
                  required
                  type="number"
                  name="room_count"
                  id="room_count"
                  className="form-control"
                />
                <label htmlFor="room_count">Room count</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleCityChange}
                  placeholder="City"
                  required
                  type="text"
                  name="city"
                  id="city"
                  className="form-control"
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="mb-3">
                <select
                  required
                  onChange={this.handleStateChange}
                  name="state"
                  id="state"
                  className="form-select"
                >
                  <option value={this.state.state}>Choose a state</option>
                  {this.state.states.map((state) => {
                    return (
                      <option
                        key={state.abbreviation}
                        value={state.abbreviation}
                      >
                        {state.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationForm;

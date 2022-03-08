import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    description: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.description === ""
    ) {
      alert("All fields are mandatory!");
    } else {
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "", description: "" });
      alert("Contact has been added!");
    }
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>

          <button className="ui button blue">Add</button>
        </form>
        <Link to="/">
          <button className="ui button blue b22">Go Back</button>
        </Link>
      </div>
    );
  }
}
export default AddContact;

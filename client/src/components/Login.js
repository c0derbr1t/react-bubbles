import React from "react";
import axios from "axios";

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    console.log(this.state.credentials);
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        // console.log("login: ", res)
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/bubble-page");
      })
      .catch(err => console.log("login error: ", err.message));
  }

  render() {
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        {/* <p>Build a login page here</p> */}
        <form onSubmit={this.login}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </label>
          <button>Login</button>
        </form>
      </>
    );
  }
};

export default Login;

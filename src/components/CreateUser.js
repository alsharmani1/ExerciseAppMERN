import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = props => (
    <tr>
      <td>{props.user.username}</td>
      <td><a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a></td>
    </tr>
  )

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            users: []
        }
        this.deleteUser = this.deleteUser.bind(this)

    }

    componentDidMount() {
        axios.get('http://localhost:3000/users/')
          .then(response => {
            this.setState({ users: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }

    onSubmit(e) {
        e.preventDefault();
        
        const user = {
            username: this.state.username
        } 
        console.log(user);
        axios.post('http://localhost:3000/users/add', user);
        window.location = '/user'
        this.setState({
            username: ''
        });
    }

    deleteUser(id) {
        axios.delete('http://localhost:3000/users/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            users: this.state.users.filter(user => user._id !== id)
        })
      }

    userList() {
        return this.state.users.map(currentuser => {
          return <UserList user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
        })
      }
    
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                        required
                        className="form-control" 
                        value={this.state.username} 
                        onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>

                <div>
                <h3>All Users</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Username</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    { this.userList() }
                </tbody>
                </table>
            </div>
            </div>
        )
    }
}
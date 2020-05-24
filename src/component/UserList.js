import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userList } from '../actions/appinessaction'


class UserList extends Component {


    componentDidMount() {
        this.props.userList();

    }

    render() {
        console.log(this.props.list.user)
        const { list } = this.props;
        return (
            <div className="container mt-5">
                <div className="row mb-3 text-center bg-primary">
                    <div className="col-sm-2 mx-auto"> <strong>User List</strong></div>
                </div>
                <div class="row border" >
                    <div className="col-sm-2 alert alert-primary">ID</div>
                    <div className="col-sm-2 alert alert-secondary">Name</div>
                    <div className="col-sm-2 alert alert-dark">Age</div>
                    <div className="col-sm-2 alert alert-warning">Gender</div>
                    <div className="col-sm-2 alert alert-success">Email</div>
                    <div className="col-sm-2 alert alert-danger">Phone No.</div>

                </div>
                <div>
                    {
                        list && list.user && list.user.length > 0 &&
                        list.user.map((data, index) => {
                            console.log(data)
                            return (
                                <div className="row border">
                                    <div className="col-sm-2 alert alert-primary">{data.id}</div>
                                    <div className="col-sm-2 alert alert-secondary ">{data.name}</div>
                                    <div className="col-sm-2 alert alert-dark">{data.age}</div>
                                    <div className="col-sm-2 alert alert-warning">{data.gender}</div>
                                    <div className="col-sm-2 alert alert-success">{data.email}</div>
                                    <div className="col-sm-2 alert alert-danger">{data.phoneNo}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    list: state.list
});
export default connect(mapStateToProps, { userList })(UserList);

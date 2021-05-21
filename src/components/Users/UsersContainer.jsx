import React, { Component } from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unFollow,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleIsFollowingProgress,
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { usersApi } from "../../api";

class UsersAPIComponent extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersApi
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersApi.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            followingIsProgress={this.props.followingIsProgress}
            onPageChanged={this.onPageChanged}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingIsProgress: state.usersPage.followingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleIsFollowingProgress,
})(UsersAPIComponent);
export default UsersContainer;

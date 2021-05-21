import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setUserProfile } from "../../Redux/profileReducer";
import Profile from "./profile";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.url;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/${userId}`)
      .then((respone) => {
        this.props.setUserProfile(respone.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);

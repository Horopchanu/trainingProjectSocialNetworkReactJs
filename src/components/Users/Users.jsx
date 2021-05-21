import React from "react";
import { NavLink } from "react-router-dom";
import { followApi } from "../../api";
import styles from "./users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p, index) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p ? styles.selected : null}
              key={index}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://i.pinimg.com/originals/25/73/14/257314878858202f4cf6b9ca37981cf0.jpg"
                  }
                  alt="ava"
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingIsProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleIsFollowingProgress(true, u.id);
                    followApi.unFollow(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unFollow(u.id);
                      }
                      props.toggleIsFollowingProgress(false, u.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingIsProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleIsFollowingProgress(true, u.id);
                    followApi.follow(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleIsFollowingProgress(false, u.id);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.locations.city"}</div>
              <div>{"u.locations.country"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

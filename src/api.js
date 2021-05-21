import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "0c620559-4f4f-4d42-a450-0321a1ea0e79",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersApi = {
  getUsers: (currentPage, pageSize) => {
    return instanse
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};
export const followApi = {
  unFollow: (userId) => {
    return instanse
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  follow: (userId) => {
    return instanse.post(`follow/${userId}`).then((response) => response.data);
  },
};

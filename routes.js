/* url mapping - manage url by one single source */

// Global stuff
const HOME = "/";
const PROFILE = "/profile";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const   USER_DETAIL = "/:id";
const   EDIT_PROFILE = "/edit-profile";
const   CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const   UPLOAD = "/upload";
const   VIDEO_DETAIL = "/:id";
const   EDIT_VIDEO = "/:id/edit";
const   DELETE_VIDEO = "/:id/delete";

const routes = {
  // Globals
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  // Users
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  // Videos
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
};

export default routes;
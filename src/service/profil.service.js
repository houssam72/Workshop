import axios from "axios";
import {
  PROFILE_URL_CREATE,
  PROFILE_URL_GET,
  PROFILE_URL_GET_CURRENT,
  PROFILE_URL_LIST,
  PROFILE_URL_UPDATE,
  PROFILE_URL_DELETE,
  PROFILE_URL_GET_ROLE,
} from "../utils/Paths";
import authHeader from "./auth-header";

const getProfile = async (id) => {
  return await axios.get(PROFILE_URL_GET(id), {
    headers: authHeader(),
  });
};
const getRole = async () => {
  return await axios.get(PROFILE_URL_GET_ROLE, {
    headers: authHeader(),
  });
};
const getCurrent = async () => {
  return await axios.get(PROFILE_URL_GET_CURRENT, {
    headers: authHeader(),
  });
};
const createProfile = async (registerDTO) => {
  return await axios.post(PROFILE_URL_CREATE, registerDTO, {
    headers: authHeader(),
  });
};
const updateProfile = async (profilDTO) => {
  return await axios.put(PROFILE_URL_UPDATE, profilDTO, {
    headers: authHeader(),
  });
};
const ProfileService = {
  createProfile,
  getProfile,
  getCurrent,
  updateProfile,
  getRole
};
export default ProfileService;

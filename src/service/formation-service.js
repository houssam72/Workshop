import axios from "axios";
import {
  FORMATION_URL_CREATE,
  FORMATION_URL_GET, 
  FORMATION_URL_LIST, 
  FORMATION_URL_UPDATE,
  FORMATION_URL_DELETE,
} from "../utils/Paths";
import authHeader from "./auth-header";

const getFormation = async (id) => {
  return await axios.get(`${FORMATION_URL_GET}/${id}`, {
    headers: authHeader(),
  });
};
const getFormations = async (done,followed,size,page) => {
  return await axios.get(`${FORMATION_URL_LIST}?done=${done}&followed=${followed}&size=${size}&page=${page}`, {
    headers: authHeader(),
  });
};
const createFormation = async (formationDTO) => {
  return await axios.post(FORMATION_URL_CREATE, formationDTO, {
    headers: authHeader(),
  });
};
const updateFormation = async (formationDTO) => {
  return await axios.put(FORMATION_URL_UPDATE, formationDTO, {
    headers: authHeader(),
  });
};
const deleteFormation = async (id) => {
  return await axios.delete(FORMATION_URL_DELETE, id, {
    headers: authHeader(),
  });
};

const FormationService = {
  createFormation,
  getFormation,
  getFormations,
  updateFormation,
  deleteFormation,
};
export default FormationService;

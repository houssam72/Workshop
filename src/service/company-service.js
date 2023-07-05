import axios from "axios";
import {
  COMPANY_URL_CREATE,
  COMPANY_URL_GET,
  COMPANY_URL_GET_COMPANIES,
  COMPANY_URL_GET_EMPLOYEES,
  COMPANY_URL_UPDATE,
  COMPANY_URL_DELETE,
  COMPANY_URL_GRANT_PRIVILEGES,
  COMPANY_URL_ADD_EMPLOYEE,
  COMPANY_URL_REMOVE_EMPLOYEE,
  COMPANY_URL_CHECK_RIGHT
} from "../utils/Paths";
import authHeader from "./auth-header";

const checkRight = async (companyId) => {
  return await axios.get(COMPANY_URL_CHECK_RIGHT(companyId), {
    headers: authHeader(),
  });
};
const getCompany = async (companyId) => {
  return await axios.get(COMPANY_URL_GET(companyId), {
    headers: authHeader(),
  });
};
const getUserCompanies = async () => {
  return await axios.get(COMPANY_URL_GET_COMPANIES(), {
    headers: authHeader(),
  });
};
const getEmployees = async (companyId, page = 0, size = 10) => {
  return await axios.get(COMPANY_URL_GET_EMPLOYEES(companyId), {
    params: { page, size },
    headers: authHeader(),
  });
};
const updateCompany = async (companyId, companyDTO) => {
  return await axios.put(COMPANY_URL_UPDATE(companyId), companyDTO, {
    headers: authHeader(),
  });
};
const deleteCompany = async (companyId) => {
  return await axios.delete(COMPANY_URL_DELETE(companyId), {
    headers: authHeader(),
  });
};
const createCompany = async (companyDTO) => {
  return await axios.post(COMPANY_URL_CREATE, companyDTO, {
    headers: authHeader(),
  });
};
const grantPrivileges = async (companyId, userId) => {
  return await axios.post(
    COMPANY_URL_GRANT_PRIVILEGES(companyId),
    { userId },
    {
      headers: authHeader(),
    }
  );
};
const addEmployee = async (companyId, employeeMail) => {
  return await axios.post(
    COMPANY_URL_ADD_EMPLOYEE(companyId),
    { employeeMail:employeeMail },
    {
      headers: authHeader(),
    }
  );
};
const removeEmployee = async (companyId, employeeId) => {
  return await axios.delete(
    COMPANY_URL_REMOVE_EMPLOYEE(companyId, employeeId),
    {
      headers: authHeader(),
    }
  );
};
const CompanyService = {
  checkRight,
  getCompany,
  getUserCompanies,
  getEmployees,
  updateCompany,
  deleteCompany,
  createCompany,
  grantPrivileges,
  addEmployee,
  removeEmployee,
};
export default CompanyService;

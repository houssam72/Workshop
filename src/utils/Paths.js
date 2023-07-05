export const API_CONTEXT = "http://localhost:8080/api";

// AUTH
export const LOGIN_CONTEXT = API_CONTEXT + "/auth/authenticate";
export const SIGNUP_CONTEXT = API_CONTEXT + "/auth/register";

// PROFILE
export const PROFILE_URL_CREATE = API_CONTEXT + "/profile/create";
export const PROFILE_URL_GET_ROLE = API_CONTEXT + "/profile/role";
export const PROFILE_URL_GET = (id) => API_CONTEXT + `/profile/${id}`;
export const PROFILE_URL_GET_CURRENT = API_CONTEXT + "/profile/current";
export const PROFILE_URL_LIST = API_CONTEXT + "/profile/list";
export const PROFILE_URL_UPDATE = API_CONTEXT + "/profile/update";
export const PROFILE_URL_DELETE = API_CONTEXT + "/profile/delete";

// FORMATION
export const FORMATION_URL_CREATE = API_CONTEXT + "/formation/create";
export const FORMATION_URL_GET = API_CONTEXT + "/formation/get";
export const FORMATION_URL_LIST = API_CONTEXT + "/formation/list";
export const FORMATION_URL_UPDATE = API_CONTEXT + "/formation/update";
export const FORMATION_URL_DELETE = API_CONTEXT + "/formation/delete";

// SONDAGE
export const QUESTION_URL_LIST = API_CONTEXT + "/question/all";
export const QUESTION_URL_ANSWER = API_CONTEXT + "/question/answer";
export const QUESTION_URL = API_CONTEXT + "/question";
export const QUESTION_URL_LIST_COMPANY_POOLS = (id, page=0, size) =>
  API_CONTEXT + `/question/company/pool/${id}?page=${page}&size=9`;
export const QUESTION_URL_NEW = (companyId) =>
  API_CONTEXT + `/question/new/${companyId}`;

// COMPANY
export const COMPANY_URL_CREATE = API_CONTEXT + "/company/create";
export const COMPANY_URL_CHECK_RIGHT = (companyId) =>
  API_CONTEXT + `/company/right/${companyId}`;
export const COMPANY_URL_GET = (companyId) =>
  API_CONTEXT + `/company/${companyId}`;
export const COMPANY_URL_GET_COMPANIES = () =>
  API_CONTEXT + `/company/companies`;
export const COMPANY_URL_GET_EMPLOYEES = (companyId) =>
  API_CONTEXT + `/company/${companyId}/employees`;
export const COMPANY_URL_UPDATE = (companyId) =>
  API_CONTEXT + `/company/update/${companyId}`;
export const COMPANY_URL_DELETE = (companyId) =>
  API_CONTEXT + `/company/delete/${companyId}`;
export const COMPANY_URL_GRANT_PRIVILEGES = (companyId) =>
  API_CONTEXT + `/company/${companyId}/grant`;
export const COMPANY_URL_ADD_EMPLOYEE = (companyId) =>
  API_CONTEXT + `/company/${companyId}/employee/add`;
export const COMPANY_URL_REMOVE_EMPLOYEE = (companyId, employeeId) =>
  API_CONTEXT + `/company/${companyId}/employees/remove/${employeeId}`;

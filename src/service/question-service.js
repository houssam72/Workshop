import axios from "axios";
import {
  QUESTION_URL,
  QUESTION_URL_LIST,
  QUESTION_URL_ANSWER,
  QUESTION_URL_LIST_COMPANY_POOLS,
  QUESTION_URL_NEW,
} from "../utils/Paths";
import authHeader from "./auth-header";

const companyPools = async (id, page,size) => {
  return await axios.get(QUESTION_URL_LIST_COMPANY_POOLS(id,page,size), {
    headers: authHeader(),
  });
};
const list = async (id, page) => {
  return await axios.get(QUESTION_URL_LIST + `?companyId=${id}&page=${page}`, {
    headers: authHeader(),
  });
};
const getAnswers = async (id, page) => {
  return await axios.get(QUESTION_URL + `/${id}/answers?page=${page}`, {
    headers: authHeader(),
  });
};
const createQuestionPool = async (questionPoolDTO) => {
  return await axios.post(QUESTION_URL,questionPoolDTO, {
    headers: authHeader(),
  });
};
const newQuestions = async (id) => { 
  return await axios.get(QUESTION_URL_NEW(id), { headers: authHeader() });
};
const answer = async (answer) => {
  return await axios.post(
    QUESTION_URL_ANSWER,
    answer,
    {
      headers: authHeader(),
    }
  );
};

const QuestionService = {
  createQuestionPool,
  getAnswers,
  list,
  answer,
  newQuestions,
  companyPools
};
export default QuestionService;

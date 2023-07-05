import { useEffect, useState } from "react";
import CompanyService from "../../service/company-service";
import QuestionService from "../../service/question-service";
import QuestionCard from "../QuestionCard";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const MySondage = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [questionPool, setQuestionPool] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    CompanyService.getUserCompanies().then((res) => {
      if (res.data.content.length > 0) {
        setCompanies(res.data.content);
        setSelectedCompany(res.data.content[0]);
      }
    });
  }, []);

  const getNewPool = () => {
    if (selectedCompany) {
      QuestionService.newQuestions(selectedCompany.id).then((res) => {
        if (res.data.length > 0) {
          setShowWarning(false);
          setQuestionPool(res.data);
          setShowQuestions(true);
        } else {
          setShowWarning(true);
        }
      });
    }
  };

  const handleCompanySelection = (event) => {
    setShowWarning(false);
    setSelectedCompany(event.target.value);
  };

  const handleAccessClick = () => {
    getNewPool();
  };

  const handleReturnClick = () => {
    setShowQuestions(false);
  };

  const handleQuestionAnswered = () => {
    setShowQuestions(false);
    setQuestionPool([]);
  };

  return (
    <main className="mt-12 p-4 ">
      <div className="flex flex-col items-center">
        <legend className="f2 mb-2">Sondages de vos entreprises</legend>
        <p className="text-justify min-w-[400px] max-w-[700px] italic ">
          Dans cette page, vos entreprises vous proposerons des sondages de
          satisfactions dans lesquelles vous indiquerez vous ressenti actuel
          dans l'entreprise. Ces informations sont anonymes, votre
          entreprise et autres contributeurs n'ont pas de vues sur vos réponses.
          <br /> <br/>
          Nous visons a votre sécurité, pour que vous puissiez exprimer vos
          soucis, sans être pénalisé. 👍
        </p>
      </div>
      {!showQuestions ? (
        <Box className="mv4">
          <Typography className="text-center" variant="body1">
            Choisissez une entreprise :
          </Typography>
          <div className=" flex w-full justify-center">
            <FormControl>
              <Select
                className="w-[300px] bg-white"
                value={selectedCompany}
                onChange={handleCompanySelection}
              >
                {companies.map((company) => (
                  <MenuItem key={company.id} value={company}>
                    {company.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" onClick={handleAccessClick}>
              Répondre
            </Button>
          </div>
        </Box>
      ) : (
        <Box className="flex flex-col items-center mv4">
          <Button
            className="w-[300px]"
            variant="contained"
            onClick={handleReturnClick}
          >
            Retour
          </Button>
          <Box className="p-4 mt-2 w-3xl min-w-[450px]">
            <Typography variant="body1" className="italic">
              Entreprise : {selectedCompany.name}
            </Typography>
            <QuestionCard
              questionList={questionPool}
              callback={handleQuestionAnswered}
            />
          </Box>
        </Box>
      )}
      {showWarning && (
        <div>
          <Typography variant="body1">
            Vous avez répondu au sondage de {selectedCompany.name} !
          </Typography>
        </div>
      )}
    </main>
  );
};

export default MySondage;

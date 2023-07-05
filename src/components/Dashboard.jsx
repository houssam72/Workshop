import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CompanyService from "../service/company-service";
import { Grid, Typography, Button } from "@mui/material";
import Company from "./Company";
import Answers from "./Answers";

function Dashboard() {
  const [companies, setCompanies] = useState([]);
  const [toggleAnswers, setToggleAnswers] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState();

  useEffect(() => {
    CompanyService.getUserCompanies()
      .then((response) => {
        setCompanies(response.data.content);
      })
      .catch((error) => {
        console.error("Failed to fetch companies:", error);
      });
  }, []);

  const showAnswers = (companyId) => {
    setToggleAnswers((state) => !state);
    setSelectedCompanyId(companyId);
  };

  return (
    <>
      <Typography variant="h3" component="div" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        {companies.length > 0 &&
          companies.map((company) => (
            <Grid item key={company.id} xs={12} md={6}>
              <Company company={company} />
              <Button
                component={Link}
                to={`/dashboard/companies/${company.id}`}
                variant="contained"
              >
                View Details
              </Button>
              <Button
                component={Link}
                to={`/dashboard/companies/${company.id}/edit`}
                variant="contained"
                >
                Edit
              </Button>
              <Button
                component={Link}
                to={`/dashboard/companies/${company.id}/stats`}
                variant="contained"
              >
                Statistiques
              </Button>
            </Grid>
          ))}
      </Grid>
      {toggleAnswers && <Answers companyId={selectedCompanyId} />}
    </>
  );
}

export default Dashboard;

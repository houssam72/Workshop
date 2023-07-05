import React, { useContext, useEffect, useState } from "react";
import CompanyService from "../service/company-service";  
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Modal,
  Backdrop,
  Fade,
  Avatar,
  Box,
  TextField,
} from "@mui/material"; 

export default function Company({ company }) {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [inviteError, setInviteError] = useState(false); 
  const [hasRight, setHasRight] = useState(false);

  useEffect(() => {    
    CompanyService.checkRight(company.id).then((res) => {
      setHasRight(res.data);
    });
  }, [company.id]);
  
  const fetchEmployees = async () => {
    CompanyService.getEmployees(company.id).then((response) =>
      setEmployees(response.data.content)
    );
  };
  const handleOpen = () => {
    setOpen(true);
    fetchEmployees();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInvite = async () => {
    await CompanyService.addEmployee(company.id, email)
      .then(() => {
        console.log("success !");
      })
      .catch(() => {
        setInviteError(true);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {company.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          SIREN: {company.siren}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Location: {company.country}, {company.city}
        </Typography>
        <Typography
          onClick={handleOpen}
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          variant="subtitle1"
          gutterBottom
        >
          Employees: {company.numberOfEmployee}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.description}
        </Typography>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
            sx: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Liste des employés
              </Typography>
              {hasRight && (
                <>
                  <TextField
                    label="Inviter un utilisateur à rejoindre l'entreprise"
                    placeholder="Entrez un e-mail"
                    value={email}
                    onChange={handleEmailChange}
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" onClick={handleInvite}>
                    Inviter
                  </Button>
                  {inviteError && (
                    <Typography color="error">
                      L'utilisateur n'a pas été trouvé. Veuillez l'inviter en
                      utilisant le formulaire ci-dessous.
                    </Typography>
                  )}
                </>
              )}
              <Grid container spacing={2}>
                {employees.map((employee) => (
                  <Grid item xs={6} sm={4} md={3} key={employee.id}>
                    <Card>
                      <CardContent
                        sx={{
                          cursor: "pointer",
                          "&:hover": {
                            background: "white",
                            filter: "brightness(0.95)",
                          },
                        }}
                      >
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                        >
                          <Avatar sx={{ width: 56, height: 56, mb: 2 }}>
                            {employee.firstname.charAt(0)}
                            {employee.lastname.charAt(0)}
                          </Avatar>
                          <Typography
                            sx={{ margin: "0 50px" }}
                            variant="subtitle1"
                            component="div"
                          >
                            {employee.firstname} {employee.lastname}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </CardContent>
    </Card>
  );
}

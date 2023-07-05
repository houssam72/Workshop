import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";

const FormationCard = ({ formation }) => {
  const defaultImg = `https://images.unsplash.com/photo-1681930942822-9df11777276c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80`;
  return ( 
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={defaultImg}
          alt="Formation"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {formation.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formation.content}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {formation.owner.firstname + " " + formation.owner.lastname} -
            {formation.createdDate.toLocaleString()}
          </Typography>
        </CardContent>
      </Card> 
  );
};

export default FormationCard;

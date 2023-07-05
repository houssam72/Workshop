import React, { useState } from "react"; 
import QuestionService from "../service/question-service";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
} from "@mui/material";

const QuestionCard = ({ questionList, callback }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [rating, setRating] = useState(3);
  const [answer, setAnswer] = useState("");
  const currentQuestion = questionList[currentQuestionIndex];

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleAnswerChange = (event) => {
    const inputAnswer = event.target.value;
    setAnswer(inputAnswer);
  };

  const handleNextQuestion = () => {
    const answerDTO = {
      questionId: currentQuestion.id,
      rating: rating,
      answer: answer,
    };
    if (currentQuestionIndex + 1 < questionList.length) {
      QuestionService.answer(answerDTO)
        .then(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setRating(3);
          setAnswer("");
        })
        .catch((error) => {
          console.error("Failed to submit answer:", error);
        });
    } else {
      QuestionService.answer(answerDTO)
        .then(() => {
          callback();
        })
        .catch((error) => {
          console.error("Failed to submit answer:", error);
        });
    }
  };

  const isAnswerExceededLimit = answer.length > 500;

  return (
    <Card>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        {currentQuestion.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {currentQuestion.description}
      </Typography>
      <Box mt={2}>
        <FormControl component="fieldset">
          <Typography variant="subtitle1" gutterBottom>
            Ressenti :
          </Typography>
          <RadioGroup 
          // row
            aria-label="rating"
            name="rating"
            value={rating}
            onChange={handleRatingChange}
          >
            <FormControlLabel value="1" control={<Radio />} label="😠 Pas satisfait" />
            <FormControlLabel value="2" control={<Radio />} label="🙁 Peu satistait" />
            <FormControlLabel value="3" control={<Radio />} label="🙂 Satisfait" />
            <FormControlLabel value="4" control={<Radio />} label="😁 Assez satisfait" />
            <FormControlLabel value="5" control={<Radio />} label="😎 Très satisfait" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box mt={2}>
        <TextField
          label="Commentaire"
          multiline
          rows={4}
          variant="outlined"
          value={answer}
          onChange={handleAnswerChange}
          inputProps={{ maxLength: 500 }}
          fullWidth
          error={isAnswerExceededLimit}
          helperText={isAnswerExceededLimit && "Valeur maximale excédée"}
        />
      </Box>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Typography
          variant="body2"
          color={isAnswerExceededLimit ? "error" : "text.secondary"}
        >
          {answer.length}/500
        </Typography>
        <Button
          variant="contained"
          onClick={handleNextQuestion}
          disabled={isAnswerExceededLimit}
        >
          Next
        </Button>
      </Box>
    </CardContent>
  </Card>
  );
};

export default QuestionCard;

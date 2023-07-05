import React, { useEffect, useState } from "react";
import QuestionService from "../service/question-service";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

function AnswerStats({ pool }) {
  const [answers, setAnswers] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(pool.questions[0]);
  const [questionIndex, setQuestionIndex] = useState(0);

  const emojis = [
    { rating: 1, message: "😠 Pas satisfait" },
    { rating: 2, message: "🙁 Peu satistait" },
    { rating: 3, message: "🙂 Satisfait" },
    { rating: 4, message: "😁 Assez satisfait" },
    { rating: 5, message: "😎 Très satisfait" },
  ];

  useEffect(() => {
    setSelectedQuestion(pool.questions[questionIndex]);
  }, [pool, questionIndex]);

  useEffect(() => {
    QuestionService.getAnswers(selectedQuestion.id, 0).then((res) => {
      setAnswers({ answers: res.data.content, count: res.data.totalElements });
    });
  }, [selectedQuestion]);

  const handleSelection = (e) => {
    setQuestionIndex(e.currentTarget.value);
  };
  const handleNext = (e) => {
    if (questionIndex <= pool.questions.length - 1)
      setQuestionIndex((i) => i + 1);
  };
  const handlePrevious = (e) => {
    if (pool.questions.length > 0) setQuestionIndex((i) => i - 1);
  };

  return (
    <>
      <select onChange={handleSelection}>
        {pool.questions.map((question, index) => (
          <option
            key={question.id}
            value={index}
            label={"Question " + (index + 1)}
          />
        ))}
      </select>
      <Card>
        <CardContent>
          <Box>
            <Typography variant="h5" component="div" gutterBottom>
              {selectedQuestion.title} - Moyenne de satisfaction :{" "}
              <span className="font-bold text-2xl">
                {selectedQuestion.ratingMean.toFixed(2) + "%"}
              </span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedQuestion.description}
            </Typography>
            <RadioGroup aria-label="rating" name="rating" value={"3"}>
              {emojis.map((emoji, index) => {
                const ratingsAnswers = selectedQuestion.answersPerRating.find(
                  (answer) => answer.rating === emoji.rating
                );
                const ratingCount = ratingsAnswers?.count;

                const fillBarWidth = ratingCount
                  ? `${Math.ceil(
                      (ratingCount / selectedQuestion.totalAnswers) * 100
                    )}%`
                  : "1%";
                return (
                  <div className="sondage-stats-bar" key={index}>
                    <div className="form-control">
                      <FormControlLabel
                        disabled
                        value={emoji.rating}
                        control={<Radio />}
                        label={emoji.message}
                      />
                    </div>
                    <div className="response-count">
                      <p className="align-middle h-fit">{ratingCount}</p>
                    </div>
                    <div className="progress-bar">
                      <span className="empty-bar">
                        <span
                          style={{ width: fillBarWidth }}
                          className={`fill-bar`}
                        ></span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </RadioGroup>

            <Button
              variant="contained"
              onClick={handlePrevious}
              disabled={questionIndex <= 0}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={questionIndex >= pool.questions.length - 1}
            >
              Next
            </Button>
          </Box>
        </CardContent>
      <Divider />
      <Box mb={2}>
        <Typography variant="body1">
          Réponse(s) ({answers?.count || 0})
        </Typography>
      </Box>
        <div className="overflow-y-scroll h-[300px]">
      <Box mt={2}>
        {answers.answers.map((answer, index) => (
          <Card key={index} variant="outlined" sx={{ mb: 2 }}> 
            <CardContent>
              <Typography variant="body2">{answer.answer}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
      </Card>
    </>
  );
}
export default AnswerStats;

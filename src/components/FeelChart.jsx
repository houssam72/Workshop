import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function FeelChart({ pool }) {
  const [data, setData] = useState(null);
  const [totalAnswers, setTotalAnswers] = useState([]);
  //initialisation du graphe
  useEffect(() => {
    const calculateTotalCount = (answersPerRating) => {
      let totalCount = 0;
      answersPerRating.forEach((answer) => {
        totalCount += answer.count;
      });
      return totalCount;
    };

    const totalAnswersPerQuestion = pool.questions.map((question) => {
      const totalCount = calculateTotalCount(question.answersPerRating);
      return { id: question.id, totalCount };
    });
    setTotalAnswers(totalAnswersPerQuestion);

    setData({
      labels: [
        "Pas satisfait",
        "Peu satistait",
        "Satisfait",
        "Assez satisfait",
        "Très satisfait",
      ],
      datasets: [
        {
          labels: "Nombre de réponses",
          data: pool.questions.map((question) =>
            calculateTotalCount(question.answersPerRating)
          ),
          backgroundColor: [
            "#FF0000",
            "#FF8C00",
            "#FFD700",
            "#32CD32",
            "#008000",
          ],
        },
      ],
    });
  }, [pool]);

  const getEmployeeFeelings = (mean) => {
    if (mean >= 0 && mean < 1) {
      return "Pas satisfait, des changements doivent être opérés pour pallier ce problème.";
    } else if (mean >= 1 && mean < 1.5) {
      return "Peu satisfait, des améliorations sont nécessaires.";
    } else if (mean >= 1.5 && mean < 2.5) {
      return "Satisfait, mais des améliorations peuvent être apportées.";
    } else if (mean >= 2.5 && mean < 3.5) {
      return "Plutôt satisfait, de bonnes performances.";
    } else if (mean >= 3.5 && mean <= 5) {
      return "Très satisfait, excellent travail !";
    } else {
      return "";
    }
  };

  const getFeelingEmoji = (mean) => {
    if (mean >= 0 && mean < 1) {
      return "images/emoji_rating_1.svg";
    } else if (mean >= 1 && mean < 1.5) {
      return "images/emoji_rating_2.svg";
    } else if (mean >= 1.5 && mean < 2.5) {
      return "images/emoji_rating_3.svg";
    } else if (mean >= 2.5 && mean < 3.5) {
      return "images/emoji_rating_4.svg";
    } else if (mean >= 3.5 && mean <= 5) {
      return "images/emoji_rating_5.svg";
    } else {
      return "";
    }
  };

  return (
    <div className="sondage-stats md:w-[375px] border-1 border-slate-200 bg-white aspect-square">
      <img
        className="relative"
        src={getFeelingEmoji(pool.questions[0].ratingMean)}
      ></img>
      <div className="">
        {data && (
          <Doughnut
            style={{ height: "350px" }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
            data={data}
          />
        )}
      </div>
      <div className="answers-count">
        {totalAnswers.map((answer) => (
          <p key={answer.id}>
            Q{answer.id}: {answer.totalCount} réponses
          </p>
        ))}
      </div>
      <p>
        Note moyenne des utilisateurs au sondage:{" "}
        <span className=" mt-2 font-bold text-xl">
          {pool.questions.reduce(
            (total, question) => total + question.ratingMean,
            0
          ) / pool.questions.length}
        </span>
        <br />
        <br /> {getEmployeeFeelings(pool.questions[0].ratingMean)}
      </p>
    </div>
  );
}

export default FeelChart;

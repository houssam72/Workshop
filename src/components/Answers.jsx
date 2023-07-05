import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FeelChart from "./FeelChart";
import QuestionService from "../service/question-service";
import { set } from "mongoose";

import { UserContext } from "../contexts/UserContext";
import { BiChevronLeft } from "react-icons/bi";
import AnswerStats from "./AnswerStats";

function Answers({ ratings }) {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [questionPools, setQuestionPools] = useState(null);
  const [showAnswer, toggleShowAnswer] = useState(false);
  const [selectedPool, setSelectedPool] = useState(null);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDate();
  }, [user, page]);

  const fetchDate = () => {
    QuestionService.companyPools(id, page, 9)
      .then((res) => {
        setQuestionPools({
          pools: res.data.content,
          count: res.data.totalElements,
        });
      })
      .catch(() => {});
  };

  const handlePoolSelection = (pool) => {
    if (pool && pool.questions.length > 0) {
      setSelectedPool(pool);
      toggleShowAnswer(true);
    }
  };

  const handleCancel = () => {
    toggleShowAnswer(false);
    setSelectedPool(null);
  };

  const calculateTotalAnswers = (questions) => {
    let totalAnswers = 0;
    questions.forEach((question) => {
      totalAnswers += question.totalAnswers;
    });
    return totalAnswers;
  };

  const calculateAverageRatingMean = (questions) => {
    const totalRatingMean = questions.reduce(
      (total, question) => total + question.ratingMean,
      0
    );
    return totalRatingMean / questions.length;
  };

  return (
    user && (
      <main>
        {showAnswer && (
          <button onClick={handleCancel} className="relative top-4 left-4">
            <BiChevronLeft size={54} />
          </button>
        )}
        <div className="sm:pl-12 sm:pr-6 md:pl-24 sm:min-h-590">
          <div className=" gap-6 flex justify-center">
            {showAnswer ? (
              <section className="sondage-stats flex-1 p-4  border-slate-300 min-h-[600px]">
                <AnswerStats pool={selectedPool} />
              </section>
            ) : (
              <section className="sondage-stats flex-1 p-4 border-slate-300 min-h-[600px]">
                Sondages ({questionPools?.count || 0})
                {questionPools && questionPools.pools.length > 0 ? (
                  questionPools.pools.map((pool) => (
                    <div
                      className="pool-card"
                      onClick={() => handlePoolSelection(pool)}
                      key={pool.id}
                    >
                      <h2 className="fnt2">SONDAGE #{pool.id}</h2>
                      <p>Nombre de questions : {pool.questions.length}</p>
                      <p>
                        Nombre de réponses :{" "}
                        {calculateTotalAnswers(pool.questions)}
                      </p>
                      <p>
                        Moyenne de satisfaction du sondage :{" "}
                        {calculateAverageRatingMean(pool.questions).toFixed(2)}
                      </p>
                    </div>
                  ))
                ) : (
                  <div>Aucun sondage disponible.</div>
                )}
              </section>
            )}
            <section className="p-4 flex-1">
              {selectedPool && <FeelChart pool={selectedPool} />}
            </section>
          </div>
        </div>
      </main>
    )
  );
}

export default Answers;

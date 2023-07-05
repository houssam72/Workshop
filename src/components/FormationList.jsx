 import FormationCard from "./Formation-Card";
import { useNavigate } from "react-router-dom";
import Accordion from "./pages/accordion";
import { Pagination } from "@mui/material";

function FormationList({ category, formations,count,page,onPageChange }) {
  const navigate = useNavigate();

  let cardTitle = "Formations";
  if (category === "available") cardTitle = "Formations disponibles";
  else if (category === "followed") cardTitle = "Formations suivies";
  else if (category === "done") cardTitle = "Formations terminées";
  function handleFormationView(formation) {
    navigate(`/formation/${formation.id}`);
  }

  return (
      <Accordion title={cardTitle} defaultShowingState={false}>
        <ul className="formation-list">
          {formations ? (
            formations.map((formation) => (
              <li
                onClick={() => handleFormationView(formation)}
                className={category === 3 ? "done" : ""}
                key={formation.id}
              >
                <FormationCard formation={formation} />
              </li>
            ))
          ) : (
            <div className="p-20  max-w-[600px] m-auto mv0">
              <p>Aucune formation trouvée</p>
            </div>
          )}
        </ul>
        <Pagination
        className="mt-5"
        count={count}
        page={page}
        variant="outlined"
        color="primary"
        shape="rounded"
        onChange={onPageChange}
      />
      </Accordion>
  );
}

export default FormationList;

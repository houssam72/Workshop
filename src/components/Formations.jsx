import { useEffect, useState } from "react";
import FormationList from "./FormationList";
import FormationService from "../service/formation-service";
import Pagination from "@mui/material/Pagination";

function Formations() {
  const [followedFormations, setFollowedFormations] = useState([]);
  const [availableFormations, setAvailableFormations] = useState([]);
  const [doneFormations, setDoneFormations] = useState([]);
  const [pages, setPages] = useState({
    fPage: 0,
    dPage: 0,
    aPage: 0,
    size: 3,
  });
  const [totalAvailable, setTotalAvailable] = useState(0);
  const [totalFollowed, setTotalFollowed] = useState(0);
  const [totalDone, setTotalDone] = useState(0);

  const handlePageChange = (event, value, category) => {
    switch (category) {
      case "followed":
        setPages((prevPages) => ({ ...prevPages, fPage: value - 1 }));
        break;
      case "available":
        setPages((prevPages) => ({ ...prevPages, aPage: value - 1 }));
        break;
      case "done":
        setPages((prevPages) => ({ ...prevPages, dPage: value - 1 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    FormationService.getFormations(false, true, pages.size, pages.fPage).then(
      (res) => {
        setFollowedFormations(res.data.content);
        setTotalFollowed(res.data.totalPages);
      }
    );
  }, [pages.fPage]);
  useEffect(() => {
    FormationService.getFormations(false, false, pages.size, pages.aPage).then(
      (res) => {
        setAvailableFormations(res.data.content);
        setTotalAvailable(res.data.totalPages);
      }
    );
  }, [pages.aPage]);
  useEffect(() => {
    FormationService.getFormations(true, false, pages.size, pages.dPage).then(
      (res) => {
        setDoneFormations(res.data.content);
        setTotalDone(res.data.totalPages);
      }
    );
  }, [pages.dPage]);

  return (
    <main className="p-4">
      <FormationList
        count={totalFollowed}
        page={pages.fPage + 1}
        onPageChange={(event, value) =>
          handlePageChange(event, value, "followed")
        }
        formations={followedFormations}
        category={"followed"}
      />

      <FormationList
        count={totalAvailable}
        page={pages.aPage + 1}
        onPageChange={(event, value) =>
          handlePageChange(event, value, "available")
        }
        formations={availableFormations}
        category={"available"}
      />

      <FormationList
        count={totalDone}
        page={pages.dPage + 1}
        onPageChange={(event, value) => handlePageChange(event, value, "done")}
        formations={doneFormations}
        category={"done"}
      />
    </main>
  );
}

export default Formations;

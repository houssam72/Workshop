import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import FormationService from "../service/formation-service";

function Formation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formation, setFormation] = useState(null);

  const defaultImg = `https://images.unsplash.com/photo-1681930942822-9df11777276c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80`;

  useEffect(() => {
    FormationService.getFormation(id)
      .then((res) => {
        setFormation(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <main className="p-8">
    {formation ? (
      <>
        <button onClick={() => navigate(-1)}>
          <span>{"<"}</span>
        </button>
        <h4 style={{ display: "flex", alignItems: "center" }}>
          {formation.title}{" "}
          {formation.resolved && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
            >
              <path d="m346 996-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z" />
            </svg>
          )}
        </h4>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <p style={{ fontSize: "1rem", color: "gray" }}>
            Par {formation.owner.firstname + " " + formation.owner.lastname}
          </p>
          <span style={{ margin: "0 0.5rem" }}>|</span>
          <p style={{ fontSize: "1rem", color: "gray" }}>
            {new Date(formation.createdDate).toLocaleDateString("fr-FR")}
          </p>
        </div>
        {
          <img
            src={defaultImg}
            alt={formation.title}
            style={{ width: "100%", borderRadius: "0.5rem", marginBottom: "1rem" }}
          />
        }
        <p>{formation.content}</p>
      </>
    ) : (
      <p>Chargement...</p>
    )}
  </main>
  );
}

export default Formation;

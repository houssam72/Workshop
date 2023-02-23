import React, { useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Accordion2 from "./according2";
function MySondage() {
  const [page, setPage] = useState(1);
  const Suivant = () => {
    if (page <= 4) {
      setPage(page + 1);
    }
  };
  const Precedent = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <>
      <Accordion2 title="Sondage " defaultShowingState={true} i={1}>
        <div className="rowForm">
          {page === 1 ? (
            <>
              <span
                className="label-form strong strong14"
                style={{ fontSize: "17px", color: "#03c9d7" }}
              >
                {"Comment vous sentez vous aujourd’hui ?     "}
                <span className="red"> *</span>
              </span>
              <ul style={{ display: "flex", margin: "20px 0 0 29%" }}>
                <li>
                  <input type="radio" id="1" name="emoji" className="demo1" />
                  <label for="1" style={{ fontSize: "30px" }}>
                    {" "}
                    &#128545;
                  </label>
                </li>
                <li>
                  <input type="radio" id="2" name="emoji" className="demo1" />
                  <label for="2" style={{ fontSize: "30px" }}>
                    &#128577;
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="3"
                    name="emoji"
                    className="demo1"
                    checked
                  />
                  <label for="3" style={{ fontSize: "30px" }}>
                    &#128528;
                  </label>
                </li>
                <li>
                  <input type="radio" id="4" name="emoji" className="demo1" />
                  <label for="4" style={{ fontSize: "30px" }}>
                    &#128578;
                  </label>
                </li>
                <li>
                  <input type="radio" id="5" name="emoji" className="demo1" />
                  <label for="5" style={{ fontSize: "30px" }}>
                    &#128512;
                  </label>
                </li>
              </ul>

              <textarea
                key={1}
                className="categorySelect  inpForm textoHs"
                placeholder="Ajoutez un commentaire"
                style={{ color: "Black", marginTop: "20px" }}
              />
            </>
          ) : page === 2 ? (
            <>
              <span
                className="label-form strong strong14"
                style={{ fontSize: "17px", color: "#03c9d7" }}
              >
                {"Comment trouvez-vous l'ambiance au travail ?        "}
                <span className="red"> *</span>
              </span>
              <ul style={{ display: "flex", margin: "20px 0 0 29%" }}>
                <li>
                  <input type="radio" id="1" name="emoji" className="demo1" />
                  <label for="1" style={{ fontSize: "30px" }}>
                    {" "}
                    &#128545;
                  </label>
                </li>
                <li>
                  <input type="radio" id="2" name="emoji" className="demo1" />
                  <label for="2" style={{ fontSize: "30px" }}>
                    &#128577;
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="3"
                    name="emoji"
                    className="demo1"
                    checked
                  />
                  <label for="3" style={{ fontSize: "30px" }}>
                    &#128528;
                  </label>
                </li>
                <li>
                  <input type="radio" id="4" name="emoji" className="demo1" />
                  <label for="4" style={{ fontSize: "30px" }}>
                    &#128578;
                  </label>
                </li>
                <li>
                  <input type="radio" id="5" name="emoji" className="demo1" />
                  <label for="5" style={{ fontSize: "30px" }}>
                    &#128512;
                  </label>
                </li>
              </ul>

              <textarea
                key={2}
                className="categorySelect  inpForm textoHs"
                placeholder="Ajoutez un commentaire"
                style={{ color: "Black", marginTop: "20px" }}
              />
            </>
          ) : page === 3 ? (
            <>
              <span
                className="label-form strong strong14"
                style={{ fontSize: "17px", color: "#03c9d7" }}
              >
                {
                  "Etes-vous satisfait de la relation entre votre supérieure et vous ?        "
                }
                <span className="red"> *</span>
              </span>
              <ul style={{ display: "flex", margin: "20px 0 0 29%" }}>
                <li>
                  <input type="radio" id="1" name="emoji" className="demo1" />
                  <label for="1" style={{ fontSize: "30px" }}>
                    {" "}
                    &#128545;
                  </label>
                </li>
                <li>
                  <input type="radio" id="2" name="emoji" className="demo1" />
                  <label for="2" style={{ fontSize: "30px" }}>
                    &#128577;
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="3"
                    name="emoji"
                    className="demo1"
                    checked
                  />
                  <label for="3" style={{ fontSize: "30px" }}>
                    &#128528;
                  </label>
                </li>
                <li>
                  <input type="radio" id="4" name="emoji" className="demo1" />
                  <label for="4" style={{ fontSize: "30px" }}>
                    &#128578;
                  </label>
                </li>
                <li>
                  <input type="radio" id="5" name="emoji" className="demo1" />
                  <label for="5" style={{ fontSize: "30px" }}>
                    &#128512;
                  </label>
                </li>
              </ul>

              <textarea
                key={3}
                className="categorySelect  inpForm textoHs"
                placeholder="Ajoutez un commentaire"
                style={{ color: "Black", marginTop: "20px" }}
              />
            </>
          ) : page === 4 ? (
            <>
              <span
                className="label-form strong strong14"
                style={{ fontSize: "17px", color: "#03c9d7" }}
              >
                {"Etes-vous satisfait des formations proposées ?     "}
                <span className="red"> *</span>
              </span>
              <ul style={{ display: "flex", margin: "20px 0 0 29%" }}>
                <li>
                  <input type="radio" id="1" name="emoji" className="demo1" />
                  <label for="1" style={{ fontSize: "30px" }}>
                    {" "}
                    &#128545;
                  </label>
                </li>
                <li>
                  <input type="radio" id="2" name="emoji" className="demo1" />
                  <label for="2" style={{ fontSize: "30px" }}>
                    &#128577;
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="3"
                    name="emoji"
                    className="demo1"
                    checked
                  />
                  <label for="3" style={{ fontSize: "30px" }}>
                    &#128528;
                  </label>
                </li>
                <li>
                  <input type="radio" id="4" name="emoji" className="demo1" />
                  <label for="4" style={{ fontSize: "30px" }}>
                    &#128578;
                  </label>
                </li>
                <li>
                  <input type="radio" id="5" name="emoji" className="demo1" />
                  <label for="5" style={{ fontSize: "30px" }}>
                    &#128512;
                  </label>
                </li>
              </ul>

              <textarea
                key={4}
                className="categorySelect  inpForm textoHs"
                placeholder="Ajoutez un commentaire"
                style={{ color: "Black", marginTop: "20px" }}
              />
            </>
          ) : (
            <>
              <div>
                <label style={{ fontSize: "60px", marginLeft: "38%" }}>
                  &#128512;
                </label>
                <h1
                  style={{
                    color: "#03c9d7",
                    border: "0px solid white",
                    padding: "10px",
                  }}
                >
                  {"Vous avez répondu à toute \n les question du formulaire ! "}{" "}
                  {"Merci pour votre temps"}
                </h1>
              </div>
            </>
          )}

          <div style={{ marginTop: "20px", paddingBottom: "30px" }}>
            {page > 1 && page < 5 && (
              <div style={{ marginBottom: "20px" }}>
                <button
                  className={
                    "clr-white btn-40 square-rounded bkg-gradient-3 fnt-12 b noborder mydemo"
                  }
                  onClick={() => {
                    Precedent();
                  }}
                  style={{ float: "left", marginBottom: "20px" }}
                  type="button"
                >
                  {"précédent"}
                </button>
              </div>
            )}
            {page != 5 && (
              <div style={{ marginBottom: "20px" }}>
                <button
                  className={
                    "clr-white btn-40 square-rounded bkg-gradient-2 fnt-12 b noborder mydemo"
                  }
                  style={{ float: "right", marginBottom: "20px" }}
                  onClick={() => {
                    Suivant();
                  }}
                  type="button"
                >
                  {"Suivant"}
                </button>
              </div>
            )}
          </div>
        </div>
      </Accordion2>
    </>
  );
}

export default MySondage;

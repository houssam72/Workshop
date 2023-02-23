import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Accordion from "./accordion";
function Cards() {
  return (
    <>
    <Accordion
      title="Formation en cours "
      defaultShowingState={false}
      i={1}
    >
      <div className="cards" style={{background:"#33373e"}}>
        <div className="cards__container" >
          <div className="cards__wrapper" >
            <ul className="cards__items" >
              <CardItem
                src="images/frm1.jpg"
                text="Formation employé en ligne - Logiciels et Outils de travail de l'entreprise"
                label="Formation intiale"
                path="/services"
              />
              <CardItem
                src="images/image-recadree.jpg"
                text="FORMATIONS EN INFORMATIQUE - APPRENTISSAGE, PROFESSIONNALISATION OU INITIALE"
                label="Formation"
                path="/services"
              />
              <CardItem
                src="images/frm2.jpg"
                text=" Formation Gestion du temps et des priorités -méthodes et outils de la gestion du temps"
                label="Formation E-learning "
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              
              <CardItem
                src="images/frm3.jpg"
                text="Formation Management hybride Adaptez votre management pour piloter et mobiliser votre équipe"
                label="Formation professionnel"
                path="/products"
              />
              <CardItem
                src="images/frm4.png"
                text="Formation Gestion du stress et bien-être professionnel Amélioration de l’efficacité et du bien-être au travail"
                label="Efficacité Professionnelle"
                path="/sign-up"
              />
            </ul>
          </div>
        </div>
      </div>
    </Accordion>
    <Accordion
    title="Formation Achevé"
    defaultShowingState={false}
  >
    <div className="cards" style={{background:"#33373e"}}>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/frm5.png"
              text="Formation Déléguer et responsabiliser ses collaborateurs-Déléguez de façon motivante et apprenante, pour susciter l’engagement de vos collaborateurs"
              label="Management"
              path="/services"
            />
            <CardItem
              src="images/frm6.jpg"
              text="FORMATION SÉCURITÉ INFORMATIQUE sensibilisez les salariés à la sécurité informatique"
              label="E-learning"
              path="/services"
            />
            <CardItem
              src="images/frm7.jpg"
              text=" Formation - Comprendre les nouvelles technologies du Digital-Machine Learning"
              label=" E-learning"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  </Accordion>
  </>
  );
}

export default Cards;

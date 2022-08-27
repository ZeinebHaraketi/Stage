import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function BasicElements() {
  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);
  React.useEffect(() => {
    
   
  });
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <section id="presentation">
          <h3 className="title" >L'Historique de l'Académie</h3>

         <p><strong>Le palais abritant l’Académie tunisienne Beït al-Hikma a été construit au milieu du XIXème siècle et s’appelait, à l’époque husseinite, Palais Zarrouk.</strong></p>
         <p><strong>
         Edifié sur un site archéologique très ancien, il est situé au pied de la colline de Carthage, ouvre directement sur la mer et jouxte les Thermes d’Antonin. C’est d’ailleurs l’inscription latine Thermis qui donnera le mot Dermech en arabe et désignera le site proprement dit, puis tout le quartier où fut édifié le futur sérail.
          </strong></p>   

        <p><strong>
        Lors d’une mission archéologique, E. De Sainte Marie affirmait avoir localisé, en 1873-1874, entre la mer et la colline dite Byrsa, deux palais : celui de Mustapha Ben Smaïl et celui d’Ahmed Zarrouk. Ils auraient été édifiés sur le cardo XVIII qui représente la limite maritime de la cité augustéenne. A une vingtaine de mètres de là, au lieu dit quartier Magon, une communauté phénicienne s’était d’ailleurs implantée au Vème siècle av. J.C. Lors de cette même mission, De Sainte Marie avait découvert une statue colossale représentant l’impératrice Sabine et datant du 1er siècle ap. J.C, ainsi que des inscriptions votives à Jupiter Serapis.  
        </strong></p>     


        <p><strong>
        Le palais actuel, au style architectural italianisant, fut construit par le général Ahmed Zarrouk, gendre d’Ali Bey et ministre de la guerre, qui en fit sa résidence personnelle. L’historien Ahmed Ibn Abi Dhiaf note dans sa correspondance à Khéreddine : «M’hamed Bey a donné un terrain avec des makhzen et un puits au général de brigade (Emir liwa) Sidi Ahmed Zarrouk, près de Saniet Sidi Lamine Bey, frère d’Ahmed Pacha 1er et l’a incité à construire un borj».  
        </strong></p> 

        <p><strong>
         Chargé de mettre fin aux révoltes des habitants du Sahel qui s’étaient soulevés contre les nouvelle réformes et l’augmentation de la mejba, Ahmed Zarrouk a laissé le souvenir de répressions impitoyables. A la mort du bey Mohamed Sadok en 1882, il tomba en disgrâce, puis décéda en 1889. Son fils Mohamed dilapida l’héritage. Un tuteur fut chargé de vendre sa résidence qui échut à Hai Bessis. C’est ainsi que se constitua petit à petit le domaine des Bessis sur la côte de Carthage. Plusieurs réceptions officielles y furent organisées, notamment à l’occasion du voyage de Jules Ferry en Tunisie, accompagné d’une délégation de sénateurs et députés. 
        </strong></p>  

        <p><strong>
          Le Bey Mohamed-El-Habib fit l’acquisition, en 1922, du palais Zarrouk et le laissa à son fils Lamine Bey, dernier souverain de la dynastie husseinite (1943-1957), qui y apporta certaines modifications: il fit recouvrir d’un toit le grand patio intérieur qui était jusque-là à ciel ouvert, transforma la haute façade et l’entrée, les orna d’un moucharabieh et d’emblèmes beylicaux et renouvela la décoration des plafonds. Il construisit dans les jardins alentour de nouveaux bâtiments d’habitation destinés à loger sa famille et sa suite et dérogea à la règle husseinite en déplaçant la salle du trône de l’étage au rez-de-chaussée.
        </strong></p>  

        <p><strong>
        C’est dans ce palais que l’autonomie interne de la Tunisie fut solennellement proclamée par le Président du Conseil français Pierre Mendès France (31/7/1954), que fut signé le Code du Statut Personnel (13/08/1956) et que fut concrétisée la République (25/7/1957).
        </strong></p>  

        <p><strong>
        La splendide avenue descendant vers la mer était bordée de majestueux palmiers. On l’aurait baptisée d’abord avenue des palmiers puis avenue Roustan. Elle devint ensuite avenue Lamine Bey, lorsque celui-ci s’appropria d’autres terrains jouxtant le sérail. Son carrosse, tiré par des chevaux bretons, sillonnait tous les jours, en grande pompe, la belle artère qui porta après l’indépendance son nom actuel : avenue de la République.
        </strong></p>  

        <p><strong>
        Après l’indépendance, le palais abrita l’Office national de l’artisanat, puis l’Institut national d’archéologie (devenu Institut national du patrimoine), puis en 1983, la Fondation nationale pour la traduction, l’établissement des textes et les études Beït al-Hikma. Celle-ci devait devenir, en 1992, l’Académie tunisienne des sciences, des lettres et des arts.
        </strong></p>  
       
        <h3 className="title">La mission de l'Académie</h3>

         <p><strong>
         Beït al-Hikma a été créée conformément à la loi n°116-92 du 30 novembre 1992 pour prendre la suite de la Fondation nationale pour la traduction, l’établissement des textes et des études créée elle-même en 1983. 
         </strong></p>

         <p><strong>
         L’Académie a été restructurée par le décret gouvernemental no 315 du 21 Mars 2019 relatif à la gestion administrative et financière et les modalités de fonctionnement de l’Académie.
          </strong></p>
        
        <p><strong>
        Elle a pour missions :
        </strong></p>

        <li><strong>Soutenir la culture tunisienne dans les divers domaines et œuvrer à son rayonnement.</strong></li>
        <br></br>
        <li><strong>De réunir les grands hommes de culture et leur permettre de poursuivre le développement de la recherche dans les différents domaines d’activité de l’esprit et de la science et d’échanger leur savoir.</strong></li>
        <br></br>

        <li><strong>De contribuer, en coordination avec les institutions similaires dans le monde, à l’enrichissement de la langue arabe, de veiller à son bon usage, de regrouper et de développer ses potentialités afin qu’elle aille de pair avec les sciences et les arts.</strong></li>
        <br></br>

        <li><strong>De contribuer à la sauvegarde du patrimoine dans les domaines de la recherche et de l’édition.</strong></li>
        <br></br>

        <li><strong>D’élaborer des dictionnaires et des encyclopédies et de traduire des ouvrages.</strong></li>
        <br></br>

        <li><strong> D’organiser des colloques et des conférences dans les différents domaines relevant des attributions de l’Académie.</strong></li>
        <br></br>

        <li><strong>D’encourager la création et la diffusion d’oeuvres de l’esprit et de l’art.</strong></li>
        <br></br>

        <li><strong>De présenter des avis sur les questions relevant de ses attributions et dont elle serait saisie par l’autorité de tutelle ainsi que par les autres départements ministériels et par toute autre institution.</strong></li>

        </section>
          <div className="space-70"></div>
          <Row id="checkRadios">
            <Col className="mb-4" lg="3" sm="6">
             
              
             
            </Col>
            <Col className="mb-4" lg="3" sm="6">
             
            </Col>
            
           
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BasicElements;

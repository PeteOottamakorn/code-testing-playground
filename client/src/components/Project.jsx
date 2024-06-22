import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProjectImages from "./ProjectImages";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      image: [
        "images/portfolio/homePage.png",
        "images/portfolio/portfolioPage.png",
        "images/portfolio/contactPage.png",
        "images/portfolio/resumePage.png",
      ],
      deploy: "https://peteoottamakorn.netlify.app/",
      gitrepo: "https://github.com/PeteOottamakorn/pete-oottamakorn-portfolio",
    },
    {
      id: 2,
      title: "artCO",
      image: ["images/artCO.png"],
      deploy: "https://artco.onrender.com/",
      gitrepo: "https://github.com/ArtColorado/artco",
    },
    {
      id: 3,
      title: "Get Out and Play",
      image: ["images/getOutAndPlay.png"],
      deploy: "https://peteoottamakorn.github.io/get-out-and-play/",
      gitrepo: "https://github.com/PeteOottamakorn/get-out-and-play",
    },
    {
      id: 4,
      title: "Weather Forecast",
      image: ["images/weatherForecast.png"],
      deploy: "https://peteoottamakorn.github.io/weather-forecast/",
      gitrepo: "https://github.com/PeteOottamakorn/weather-forecast",
    },
  ];

  return (
    <Row>
      {projects.map((project) => (
        <Col xs={12} md={6} lg={4} key={projects.id}>
          <Card key={projects.id}>
            <ProjectImages images={project.image} interval={1000} />
            <Card.Body>
              <Card.Title>{projects.title}</Card.Title>
              <Card.Text>
                {projects.deploy ? (
                  <Link to={projects.deploy} className="projectLink">
                    Site
                  </Link>
                ) : (
                  <p id="inactiveLink">Site</p>
                )}
                <Link to={projects.gitrepo} className="projectLink">
                  GitHub
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Project;

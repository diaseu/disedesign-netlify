import React from 'react';
import 'antd/dist/antd.css'
import { Row, Col, Card, Typography } from 'antd';
import { ModalComponent, Navcrumb } from '../../components'

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const Portfolio = ({ page }) => {

  const projects = [
    {
      id: 0,
      name: "Zap: Bug Tracker",
      blurb: "Social bug tracking app, with the ability to crowd-source solutions to issues and questions",
      description: "Not everything needs to be a revolutionary new idea. Sometimes we just want to take something that already exists and simply make it better.  We wanted to make a bug tracking app that innovates on currently existing forms such as Trello or Jira, and give it a social media flavor.  Zap App gives users the ability to create projects and organize tasks, bugs and issues, and then reach out to the community to crowdfund solutions and answers.",
      url: "https://zapbugtracker.herokuapp.com/",
      git: "https://github.com/diaseu/project3",
      img: "https://i.imgur.com/nJf59GQ.png",
      technology: ["Javascript", "MongoDB", "Express", "React.JS", "Node.JS", "Material-UI"]
    },
    {
      id: 1,
      name: "Study Blog",
      blurb: "Social blog App where users can post, comment and vote on student-created content",
      description: "Study Blog is a student-centered forum website for students to share notes, curated and promoted through voting. Users are able to create rich-text posts chasing any notes and articles related to a specific topic, which are sorted into topic categories. Users can register by creating a username and a password and entering their email address. All passwords are encrypted using passport and jsonwebtoken modules. Users can upvote/downvote or comment on other users' posts. All the user, post, and comment data is saved in an SQL database using the JAWSDB add-on on Heroku. This application allows users to post study material for the following topics:  HTML, Javascript, Node.JS, SQL",
      url: "https://studyblog.herokuapp.com/",
      git: "https://github.com/diaseu/studyBlog",
      img: "https://i.imgur.com/43rACDv.png",
      technology: ["Javascript", "MySQL2", "Express", "React.JS", "Node.JS", "Passport", "JSON Web Token", "Sequelize"]
    },
    {
      id: 2,
      name: "Beleaf Co.",
      blurb: "Online boutique shop specializing in rare tropical plants",
      description: "Beleaf Co. is a online boutique shop specializing in sales of rare tropical plants and various related accessories. This started as a personal passion in collecting rare tropical houseplants, which eventually led to propagating and sharing the plant love with the local community. COMING SOON ",
      url: "https://www.beleafco.me",
      git: "https://github.com/diaseu?tab=repositories",
      img: "https://i.imgur.com/nJf59GQ.png",
      technology: ["Javascript", "MongoDB", "Express", "React.JS", "Node.JS", "Commerce.JS", "Ant Design"]
    },
  ]

  return (
    <>
      <Navcrumb page={page} />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Typography><Title className="line">My Projects</Title>
          <Title level={4} className="line">View Resume (<a href="https://drive.google.com/file/d/1_Er4m48YRndKx0D8ioVnFjblKHd-ghM0/view?usp=sharing" target="_blank">PDF</a> / <a href="https://i.imgur.com/D282eag.jpeg" target="_blank">JPG</a>)</Title>
        </Typography>
        <Row>
          {projects.map((project) => (
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  // cover={<img alt={project.name} src={project.img} />}
                >
                  {/* <Meta 
                    title={project.name} 
                    description={project.description} 
                    style={{ margin: '0 0 22px 0'}}
                    /> */}
                  <ModalComponent 
                    project={project} 
                    />
                </Card>
              </Col>
            

          ))}
        </Row>

      </div>
    </>
  )
}

export default Portfolio
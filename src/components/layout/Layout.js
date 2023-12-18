import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from '../ui/ImageCard';
import InfoCard from '../ui/InfoCard';
import data from '../../data/info.json'
import classes from './Layout.module.css';
import Timeline from '../ui/Timeline';
import AccordionCard from '../ui/AccordionCard';

import profileImg from '../../media/profile.jpg';
import projectImg from '../../media/nwu_logo.png';
import projectFile from '../../media/honnours_project.pdf';

const Contact = {
    Title: data.Contact.Name,
    Description: data.Contact.Position,
    ImgUrl: profileImg,
    ImagePos: data.Contact.ImagePos,
    PositionURL: data.Contact.PositionURL,
    Email: {
        Title: data.Contact.Email.Title,
        Href: data.Contact.Email.Href
    },
    Cell: {
        Title: data.Contact.Cell.Title,
        Href: data.Contact.Cell.Href
    }
}

const About = {
    Title: data.About.Title,
    Description: data.About.Description,
}

const Career = {
    Title: data.Career.Title,
    Description: data.Career.Description,
}

const Social = {
    Title: data.Social.Title,
    Buttons : [
        {
            BtnName: data.Social.Github.Title,
            Href: data.Social.Github.URL,
            BtnVariant: "info"
        },
        {
            BtnName: data.Social.LinkedIn.Title,
            Href: data.Social.LinkedIn.URL,
            BtnVariant: "info"
        }
    ]
}

const Project = {
    Title: data.Projects.Honnours.Title,
    Subtitle: data.Projects.Honnours.Subtitle,
    Description: data.Projects.Honnours.Description,
    Keywords: data.Projects.Honnours.Keywords,
    ImgUrl: projectImg,
    BtnTitle: "View full research report",
    BtnUrl: projectFile
}

function Layout() {
    return (
        <Container fluid>
            <Row className={classes.rows}>
                <Col className={classes.columns} sm={3}>
                    <ImageCard
                        Title={Contact.Title}
                        Description={Contact.Description}
                        PositionURL={Contact.PositionURL}
                        ImgUrl={Contact.ImgUrl}
                        ImgPos={Contact.ImgPos}
                        Email={Contact.Email}
                        Cell={Contact.Cell}/>
                </Col>
                <Col className={classes.columns} sm={4}>
                    <InfoCard
                        Title={About.Title}
                        Description={About.Description}
                        Buttons={[]}
                    />
                    <InfoCard
                        Title={Career.Title}
                        Description={Career.Description}
                        Buttons={[]}
                    />
                    <InfoCard
                        Title={Social.Title}
                        Description=""
                        Buttons={Social.Buttons}
                    />
                    <AccordionCard
                        Title={Project.Title}
                        Subtitle={Project.Subtitle}
                        Description={Project.Description}
                        Keywords={Project.Keywords}
                        ImgUrl={Project.ImgUrl}
                        BtnTitle={Project.BtnTitle}
                        BtnUrl={Project.BtnUrl}
                    />
                </Col>
                <Col className={classes.columns}>
                    <Timeline
                        Timeline={data.Timeline}
                    ></Timeline>
                </Col>
            </Row>
        </Container>
    )
}

export default Layout;
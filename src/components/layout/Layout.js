import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from '../ui/ImageCard';
import InfoCard from '../ui/InfoCard';
import data from '../../data/info.json'
import classes from './Layout.module.css';
import Timeline from '../ui/Timeline';

import profileImg from '../../media/profile.jpg';

const Contact = {
    Title: data.Contact.Name,
    Description: data.Contact.Position,
    ImgUrl: profileImg,
    ImagePos: data.Contact.ImagePos,
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
    Github: {
        Title: data.Social.Github.Title,
        URL: data.Social.Github.URL
    }
}

function Layout() {
    return (
        <Container fluid>
            <Row className={classes.rows}>
                <Col className={classes.columns} sm={3}>
                    <ImageCard
                        Title={Contact.Title}
                        Description={Contact.Description}
                        ImgUrl={Contact.ImgUrl}
                        ImgPos={Contact.ImgPos}/>
                </Col>
                <Col className={classes.columns} sm={4}>
                    <InfoCard
                        Title={About.Title}
                        Description={About.Description}
                    />
                    <InfoCard
                        Title={Career.Title}
                        Description={Career.Description}
                    />
                    <InfoCard
                        Title={Social.Title}
                        Description={Social.Github.Title}
                    />
                </Col>
                <Col className={classes.columns}>
                    <Timeline
                        Timeline={data.Timeline}
                    ></Timeline>
                </Col>
            </Row>
            <Row className={classes.rows}>
            </Row>
        </Container>
    )
}

export default Layout;
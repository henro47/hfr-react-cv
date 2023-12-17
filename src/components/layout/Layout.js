import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from '../ui/ImageCard';
import InfoCard from '../ui/InfoCard';
import data from '../../data/info.json'
import classes from './Layous.module.css';

import profileImg from '../../media/profile.jpg';
import backgroundImg from '../../media/background.jpg'

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
        <Container fluid className={classes.background}>
            <Row>
                <Col className={classes.padding} sm={4}>
                    <ImageCard
                        Title={Contact.Title}
                        Description={Contact.Description}
                        ImgUrl={Contact.ImgUrl}
                        ImgPos={Contact.ImgPos}/>
                </Col>
                <Col className={classes.padding} sm={4}>
                    <InfoCard
                        Title={About.Title}
                        Description={About.Description}
                    />
                </Col>
            </Row>
            <Row>
                <Col className={classes.padding} sm={4}>
                <InfoCard
                        Title={Social.Title}
                        Description={Social.Github.Title}
                    />
                </Col>
                <Col className={classes.padding} sm={4}>
                    <InfoCard
                            Title={Career.Title}
                            Description={Career.Description}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Layout;
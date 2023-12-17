import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from '../ui/ImageCard';
import data from '../../data/info.json'

function Layout() {
    const about = {
        Title: data.About.Name,
        Description: data.About.Position,
        ImgUrl: data.About.ImageUrl,
        ImagePos: data.About.ImagePos,
    }
    return (
        <Container fluid>
            <Row>
                <Col>
                    <ImageCard
                        Title={about.Title}
                        Description={about.Description}
                        ImgUrl={about.ImgUrl}
                        ImgPos={about.ImgPos}/>
                </Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    )
}

export default Layout;
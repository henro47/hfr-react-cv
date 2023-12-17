import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from '../ui/ImageCard';
import data from '../../data/info.json'

function Layout() {
    const about = {
        Title: data.About.Name,
        Description: data.About.Position
    }
    return (
        <Container fluid>
            <Row>
                <Col>
                    <ImageCard Title={about.Title} Description={about.Description} imgPos='Top'/>
                </Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    )
}

export default Layout;
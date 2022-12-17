import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Years(){
    return(
        <>
                   <div className="YearsContainerh2">
                <h2 className="Yearsh2">Cellix Bio's Patents Yearwise (2009 to 2022)</h2>
            </div>
            
            <div className='yearscontainer'>
    <Container className='yearcontainer'>
    <Row>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2009">2009<p className='yearp'>Patents: 3</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2010">2010<p className='yearp'>Patents: 1</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2011">2011<p className='yearp'>Patents: 18</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2012">2012<p className='yearp'>Patents: 13</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2013">2013<p className='yearp'>Patents: 74</p></Link>
                    </Button>
            </div>        
        </Col>
        
      </Row>
      <Row>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2014">2014<p className='yearp'>Patents: 90</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2015">2015<p className='yearp'>Patents: 88</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2016">2016<p className='yearp'>Patents: 50</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2017">2017<p className='yearp'>Patents: 25</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2018">2018<p className='yearp'>Patents: 30</p></Link>
                    </Button>
            </div>        
        </Col>
      </Row>
      <Row>
     
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2019">2019<p className='yearp'>Patents: 76</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2020">2020<p className='yearp'>Patents: 57</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2021">2021<p className='yearp'>Patents: 68</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="YearsButtonContainer">
                    <Button className='yearbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2022">2022<p className='yearp'>Patents: 48</p></Link>
                    </Button>
            </div>        
        </Col>
      </Row>
    </Container>
    </div>
        </>
    );
}
export default Years;
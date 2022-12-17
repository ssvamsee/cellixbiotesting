import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Years() {
  return (
    <div className='yearscontainer'>
    <Container className='yrcontainer'>
    <Row>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2009">2009<p className='yrp'>Patents: 74</p></Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2010">2010</Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2011">2011</Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2012">2012</Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2013">2013</Link>
                    </Button>
            </div>        
        </Col>
        
      </Row>
      <Row>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2014">2014</Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2015">2015</Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2016">2016</Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2017">2017</Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2018">2018</Link>
                    </Button>
            </div>        
        </Col>
      </Row>
      <Row>
     
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2019">2019</Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2020">2020</Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2021">2021</Link>
                    </Button>
            </div>        
        </Col>
        <Col xs={6} md={2}>
            <div className="d-grid gap-2 shadow-lg YearsButtonContainer">
                    <Button className='yrbtn' variant="dark" size="lg">
                        <Link className='YearsLinks' to="/PatentsDashboard/2022">2022</Link>
                    </Button>
            </div>        
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Years;
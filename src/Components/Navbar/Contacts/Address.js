import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Address(){
    return(
        <>
            <CardGroup  className='CUCard'>
                <Card>
                <Card.Body>
                    <Card.Title className='CUCT'>Our Office Address:</Card.Title>
                    <Card.Text>
                        <ul className='CUUL'>
                            <li className='CULI'>Cellix Bio Private Limited,</li>
                            <li>Plot No.1177 B, Road No.56,</li>
                            <li>Jubilee Hills, Hyderabad,</li>
                            <li>Pin: 500033, <span className='CUSpan'>India.</span></li>
                        </ul>
                        <ul className='CUUL'>
                            <li className='CULI'>Cellix Biosciences Inc,</li>
                            <li>NJIT-Enterprise Development Center, 211 Warren Street, Newark, NJ 07103, <span className='CUSpan'>USA.</span></li>
                        </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
                
                <Card>
                <Card.Body>
                    <Card.Title className='CUCT'>Contact No:</Card.Title>
                    <Card.Text>
                    <ul className='CUUL'>
                        <li><span className='CUSpan'>Phone: </span>(+91) 40 23545946</li>
                        <li><span className='CUSpan'>Fax: </span>(+91) 40 23545949</li>
                        <li><span className='CUSpan'>Email: </span>info@cellixbio.com</li>
                    
                    </ul>
                    <ul className='CUUL'>
                        <li><span className='CUSpan'>phone: </span>+1 862 485 7489</li>
                        <li><span className='CUSpan'>Email: </span>info@cellixbio.com</li>
                    </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
                
                <Card>
                <Card.Body>
                    <Card.Title className='CUCT'>Business Hours:</Card.Title>
                    <Card.Text>
                    <ul className='CUUL'>
                        <li className='CUSpan'>Monday - Saturday</li>
                        <li className='CUSpan'>9:30am to 6pm</li>
                        <li className='CUSpan'>Sunday - Closed</li>
                    </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
            </CardGroup>
        </>
    );
}
export default Address;
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Leadership() {
  document.title = 'Leadership - Cellix Bio';
  return (
      <CardGroup className='LeadCard'>
        {/* <h1 className='Lh2'>MANAGEMENT TEAM</h1> */}
        
          <Card className='Leadership'>
            <Card.Img name="Limage" variant="top" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.Mahesh.PNG" />
            <Card.Body>
                <Card.Title className='LCardTitle'>Mahesh Kandula</Card.Title>
                  <Card.Text>
                  Director Drug Design and Development, Innovation & IPFounder
                  </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small  className='Lfm'>Mahesh brings over 18 years of scientific and entrepreneurial experience in the life science industry. Mr. Kandula has been named an inventor on 72 United States Issued Patents, 29 United States Patent Pending Applications and more than 226 International Patent Applications. Mr. Kandula received his Master of Technology degree from IIT Kharagpur.
              </small>
            </Card.Footer>
          </Card>
          </CardGroup>
    
      
  );
}

export default Leadership;
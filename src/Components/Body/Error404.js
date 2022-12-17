import error from "../Assets/Images/404.png"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Error404(){
    const navigate = useNavigate();
    return(
        <div className="Errorcont">
            <img className="Errorpage" src={error} alt="Teamwork"></img>
            {/* <button className="Errorbutton">For Home</button>   */}
            <Button onClick={() => navigate('/Home')}className="Errorbutton" variant="outline-primary">Go to Home Page</Button>
        </div>
    );
}
export default Error404;
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";

function SearchPatents(){
    const [searchPatent, setSearchPatent] = useState();
    const searchHandle = async (e) => {
        let key = e.target.value;
        if(key){
            let result = await fetch(`http://13.233.51.172/patents/${key}`);
            result = await result.json()
            if(result){
                setSearchPatent(result);
            }
        }else{
            console.log("No Patent Found");
        }
    }
    console.log(searchPatent);

    return(
        <div>
            <div className="SearchPatentsh2Container">
                <h3 className="SearchPatentsh2">Search For Patents under Cellix Bio by entering WIPO Number or Therapeutic Area</h3>
            </div>
            <div>
                <div className="SearchPatentContainer">
                   <input onChange={searchHandle} className="SearchBarPatents" type="search" placeholder="ENTER WIPO NUMBER OR THERAPEUTIC AREA"></input>
                   <button className="SearchBarButton"><TfiSearch /></button>
                </div>
                {      
                         searchPatent && searchPatent.map((patent) => (
                            <div className='CardContainer'>
                                    <Card
                                        style={{ width: '90rem' }} 
                                        className = "shadow-lg PatentsCard">
                                        <Card.Body>
                                            <Card.Title>
                                                <Link className='Wno' to = {"/patentInfo/"+patent.wno} target={"_blank"}>{patent.wno}</Link>
                                            </Card.Title>
                                            <div className='cardTextContainer'>
                                                <div className='cardTextInfoContainer'>
                                                    <Card.Text className='CardTextInfo'>
                                                        <p>{patent.diseases}</p>
                                                        <p><span className='CardTextSpan'>Therapeutic Area: </span>{patent.therapeutic_area}</p>
                                                    </Card.Text>
                                                </div>
                                                <div className='cardTextDateContainer'>
                                                    <Card.Text>
                                                        <p><span className='CardTextSpan'>Publication Date: </span>{patent.publication_date}</p>
                                                    </Card.Text>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                            </div>
                    ))
                }
            </div>
        </div>
    );
}
export default SearchPatents;
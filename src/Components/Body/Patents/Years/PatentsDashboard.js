import Card from 'react-bootstrap/Card';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';
import PatentCardSkeleton from './PatentCardSkeleton';


function PatentsDashboard(){
    const [patents, setPatents] = useState("");
    const {years} = useParams();
    const [loading, setLoading] = useState(true);
    document.title = `${years} - Cellix Bio Patents`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await axios.get(`http://13.233.51.172/patents/years/${years}`);
                setPatents(data);
            } catch (err) {}
            setLoading(false);
        };
        fetchData();
    }, []);
    console.log(patents.data);
    // console.log(patents.data.length);

    return(
        <div>
            <div className="PDcontainer">
                <div className="PDcontainerh2">
                    <h2 className="PDh2">Access the Patents filed by Cellix Bio in {years} below</h2>
                    {/* <h3 className="PDh2">No of International Patents in {years} are {patents.data.length}</h3> */}
                </div>
            </div>
            {loading ? (<PatentCardSkeleton></PatentCardSkeleton>) : (
                patents.data.map((patent) => (
                    <div className='CardContainer'>
                            <Card
                                style={{ width: '90rem' }} 
                                className = "shadow-lg PatentsCard">
                               <Card.Body>
                                    <Card.Title>
                                        <Link className='Wno' to= {"/patentInfo/"+patent.wno} target={"_blank"}>{patent.wno}</Link>
                                    </Card.Title>
                                    <div className='cardTextContainer'>
                                        <div className='cardTextInfoContainer'>
                                            <Card.Text className='CardTextInfo'>
                                                <p>{patent.diseases}</p>
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
            )}   
        </div>
    );
}
export default PatentsDashboard;
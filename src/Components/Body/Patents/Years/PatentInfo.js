import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Claims from './Claims';
import Compounds from './Compounds';
import Formulas from './Formulas';
import {useParams} from 'react-router-dom'
import TherapeuticArea from './TherapeuticArea';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PatentInfo(){
    const {wno} = useParams();
    const [patentFormulas, setPatentFormulas] = useState("formulas are loading");
    const [patentCompounds, setPatentCompounds] = useState("Compounds are Loading");
    const [therapeuticArea, setTherapeuticArea] = useState("Therapeutic Area is Loading");
    const [diseases, setDiseases] = useState("Diseases are loading");
    const [claims, setClaims] = useState("Claims are Loading");
    document.title = `${wno} - Cellix Bio`;

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`http://13.233.51.172/patents/wipo/${wno}`);
            console.log(data.data[0].formula);
            // console.log(patents[0].formula);
            setPatentFormulas(data.data[0].formula);
            setPatentCompounds(data.data[0].compounds);
            setTherapeuticArea(data.data[0].therapeutic_area);
            setDiseases(data.data[0].diseases);
            setClaims(data.data[0].claims);
        };
        fetchData();
    });
    
    return(
        <div>
             <h2 className='PatentInfoh2'>{wno}</h2>
            <Tabs
                defaultActiveKey="Formulas"
                id="uncontrolled-tab-example"
                className="mb-3 shadow-lg Tabs"
                fill
                >
                <Tab eventKey="Therapeutic Area" title="Therapeutic Area" active hide>
                    <TherapeuticArea therapeuticArea = {therapeuticArea} diseases = {diseases}></TherapeuticArea>
                </Tab>
                <Tab eventKey="Formulas" title="Formulas">
                    <Formulas formula = {patentFormulas}></Formulas>
                </Tab>
                <Tab eventKey="Claims" title="Claims">
                    <Claims claim = {claims}></Claims>
                </Tab>
                <Tab eventKey="Compounds" title="Compounds and Methods">
                    <Compounds compound = {patentCompounds}></Compounds>
                </Tab>
            </Tabs>
        </div>
    );
}
export default PatentInfo;
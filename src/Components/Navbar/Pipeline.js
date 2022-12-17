import Table from 'react-bootstrap/Table';

function Pipeline(){
    document.title = 'Pipeline - Cellix Bio';
    return(
        <>
            <div className='PLContainer'>
                <div className='PLContainerh3'>
                  <h3 className="PLh3">PIPELINE</h3>
                </div>
                <div className="PLpContainerp">
                  <p className="PLp"><span>Cellix Bio</span>research & drug programmes focus on the understanding of the underlying mechanisms of diseases. Our proprietary technology platform currently focusses to improve success rates, minimise drug discovery costs and speed up development timelines by converging on targets that have been independently validated in diseases.</p>
                </div>
            </div>

            <Table striped bordered hover size="sm" className='Ptable'>
                <thead>
                    <tr>
                        <th>THERAPEUTIC AREA</th>
                        <th>COMPOUND</th>
                        <th>INDICATION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={9}>ONCOLOGY</td>
                        <td>CLX-ONC-5516</td>
                        <td>Colorectal Cancer</td>
                    </tr>
                    <tr>
                        <td>CLX-ONC-55A3</td>
                        <td>Gastric Cancer</td>
                    </tr>
                    <tr>
                        <td>CLX-ONC-55A9</td>
                        <td>Advanced Breast Cancer</td>
                    </tr>
                    <tr>
                        <td>CLX-ONC-164A2</td>
                        <td>Brain Cancer</td>
                    </tr>
                    <tr>
                        <td>CLX-ONC-575</td>
                        <td>Familial Adenomatous Polyposis (FAP)</td>
                    </tr>
                    <tr>
                        <td>CLX-ONC-643	</td>
                        <td>Anaplastic Astrocytoma</td>
                    </tr>
                    <tr>
                        <td>CLX-ONC-55A6</td>
                        <td>Advanced Ovarian Cancer</td>
                    </tr>
                    <tr>
                        <td>CLX-ONC-5516</td>
                        <td>Breast Cancer</td>
                    </tr>
                    <tr>
                        <td>CLX-ONC-55A6</td>
                        <td>Pancreatic Cancer</td>
                    </tr>


                    <tr>
                        <td rowSpan={7}>OPHTHALMOLOGY</td>
                        <td>CLX-OPH-56</td>
                        <td>Glaucoma</td>
                    </tr>
                    <tr>
                        <td>CLX-OPH-561</td>
                        <td>Presbyopia</td>
                    </tr>
                    <tr>
                        <td>CLX-OPH-62D</td>
                        <td>Myopia</td>
                    </tr>
                    <tr>
                        <td>CLX-OPH-62</td>
                        <td>Glaucoma</td>
                    </tr>
                    <tr>
                        <td>CLX-OPH-621</td>
                        <td>Dry Eye</td>
                    </tr>
                    <tr>
                        <td>CLX-OPH-622</td>
                        <td>Ocular Redness</td>
                    </tr>
                    <tr>
                        <td>CLX-OPH-65</td>
                        <td>Cataract</td>
                    </tr>

                    <tr>
                        <td rowSpan={3}>NEUROLOGY</td>
                        <td>CLX-NEU-06</td>
                        <td>Multiple Sclerosis</td>
                    </tr>
                    <tr>
                        <td>CLX-NEU-61</td>
                        <td>Major Depressive Disorder</td>
                    </tr>
                    <tr>
                        <td>CLX-NEU-161A11</td>
                        <td>Postsurgical Local Analgesia</td>
                    </tr>

                    <tr>
                        <td rowSpan={3}>GASTROINTESTINAL</td>
                        <td>CLX-GI-03</td>
                        <td>Ulcerative Colitis</td>
                    </tr>
                    <tr>
                        <td>CLX-GI-3A5</td>
                        <td>Paediatric Ulcerative Colitis</td>
                    </tr>
                    <tr>
                        <td>CLX-GI-62D2</td>
                        <td>Fecal Incontinence</td>
                    </tr>

                    <tr>
                        <td>INFECTIOUS DISEASES</td>
                        <td>CLX-IFN-59</td>
                        <td>Systemic Fungal Infections</td>
                    </tr>
                    
                    <tr>
                        <td rowSpan={2}>PULMONOLOGY</td>
                        <td>CLX-PUL-597E</td>
                        <td>Allergic Bronchopulmonary Aspergillosis</td>
                    </tr>
                    <tr>
                        <td>CLX-PUL-5910E</td>
                        <td>Invasive Pulmonary Aspergillosis</td>
                    </tr>

                    <tr>
                        <td rowSpan={2}>METABOLIC DISEASES</td>
                        <td>CLX-MET-101</td>
                        <td>Diabetes and Lipid Disorders</td>
                    </tr>
                    <tr>
                        <td>CLX-MET-102	</td>
                        <td>Type 2 Diabetes Metformin</td>
                    </tr>

                    <tr>
                        <td rowSpan={4}>DERMATOLOGY</td>
                        <td>CLX-DER-622</td>
                        <td>Rosacea</td>
                    </tr>
                    <tr>
                        <td>CLX-DER-64C2</td>
                        <td>Acne</td>
                    </tr>
                    <tr>
                        <td>CLX-DER-62C2</td>
                        <td>Rosacea</td>
                    </tr>
                    <tr>
                        <td>CLX-DER-64C3</td>
                        <td>Rosacnjnea</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Pipeline;
function Formulas({formula}){
    console.log(formula);
    const FormulaArray = formula.split("\n");
    console.log(FormulaArray);
    console.log("Array Length: ", FormulaArray.length);

    return(
        <div>
            <h3 className="PITBh4">FORMULA</h3>
                        <div className="FormulaImgContainer">
                {
                    FormulaArray.length>=1 ? FormulaArray.map((image) => {
                        return(
                            <div className="ClaimsText" dangerouslySetInnerHTML={{__html: `<p className="ClaimsText">${image}</p>`}}></div>
   
                        // <img className='PatentImages' src={image} alt=""></img>
                        )
                    }) : <img width={500} height={450} src='https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.DataNotFound.png' alt='aws'></img>
                }
            </div>
        </div>
    );
}
export default Formulas;
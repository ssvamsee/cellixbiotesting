function Claims({claim}){
    console.log(claim);
    const ClaimArray = claim.split("\n");
    console.log(ClaimArray);
    console.log("Array Length: ", ClaimArray.length);
    return(
        <div>
            <h1 className="PITBh4">CLAIMS</h1>
            <div className="ClaimsContainer">
                {
                    ClaimArray.length>1 ? ClaimArray.map((image) => {
                        return(
                          <div>
                            <div className="ClaimstextCon">
                                <div className="ClaimsText" dangerouslySetInnerHTML={{__html: `<p className="ClaimsText">${image}</p>`}}></div>
                                {/* <p className = "ClaimsText">{image}</p> */}
                            </div>
                            {/* <div className="ClaimsImgCon">
                            <img className='PatentImages' src={image} alt=""></img>
                            </div> */}
                          </div>
                        )
                    }) : <img className="claimsdatanotfound" width={500} height={450}  src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.DataNotFound.png" alt="aws"></img>
                }
            </div>
        </div>
    );
}
export default Claims;
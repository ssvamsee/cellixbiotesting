function Compounds({compound}){
    console.log(compound);
    const CompoundArray = compound.split("\n");
    console.log(CompoundArray);

    return(
        <div>
            <h3 className="PITBh4">COMPOUNDS/METHODS</h3>
            <div className="CompoundsImgContainer">
                {
                        CompoundArray.length>1 ? CompoundArray.map((image) => {
                            return(
                            <img className='PatentImages' src={image} alt=""></img>
                            )
                        }) : <img width={500} height={450} src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.DataNotFound.png" alt="aws"></img>
                }
            </div>
        </div>
    );
}
export default Compounds;
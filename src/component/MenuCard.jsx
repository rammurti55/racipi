function MenuCard({ menuData }) {

    return (

        <>
            {/* <div className="container">
            <div className="row">
                {
                    menuData.map((curEle)=>{
                        return(
                            <div className="col-sm-4" key={curEle.id}></div>
                        )
                    })
                }
            </div>
        </div> */}

            <div className="container-fluid ">
                <div className="row mt-5">
                    {menuData.map((curEle) => {
                        return (
                            <div className="col-sm-4 mt-3" key={curEle.id}><div className="card  mb-3 p-2" >
                                <img src={curEle.img} className="card-img px-2" alt="..." />
                                <div className="card-body  ">
                                    <h5 className="fst-italic">
                                        {curEle.name}
                                    </h5>
                                    <h6 className="text-danger">{curEle.price}</h6>
                                    <h6 className="card-title">{curEle.category}</h6>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                </div>
                            </div>
                            </div>
                        )

                    })
                    }
                </div>
            </div>
        </>
    )
}
export default MenuCard;
import React from "react";

function CardBody(props) {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <img onClick={props.incrementButton} id="image1" alt="..." className="cartoonImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"></img>
                </div>
                <div className="col-md-4">
                    <img onClick={props.incrementButton} id="image2" alt="..." className="cartoonImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png"></img>
                </div>
                <div className="col-md-4">
                    <img onClick={props.incrementButton} id="image3" alt="..." className="cartoonImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img onClick={props.incrementButton} id="image4" alt="..." className="cartoonImg" src="https://vignette.wikia.nocookie.net/familyguyfanon/images/0/02/Stewie_Griffin.png/revision/latest?cb=20161119043926"></img>
                </div>
                <div className="col-md-4">
                    <img onClick={props.incrementButton} id="image5" alt="..." className="cartoonImg" src="https://i.pinimg.com/originals/a8/d8/cd/a8d8cd1903ed8d0b8aa20f398772210f.jpg"></img>
                </div>
                <div className="col-md-4">
                    <img onClick={props.incrementButton} id="image6" alt="..." className="cartoonImg" src="https://www.dailynews.com/wp-content/uploads/migration/2013/201311/ENTERTAINMENT_131129553_AR_0_NUHUWAQGMDGE.jpg?w=535"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img onClick={props.incrementButton} id="image7" alt="..." className="cartoonImg" src="https://vignette.wikia.nocookie.net/rocketpower/images/2/2c/Otto_on_skatebored.png/revision/latest/scale-to-width-down/340?cb=20180927131542"></img>
                </div>
                <div className="col-md-4">
                    <img onClick={props.incrementButton} id="image8" alt="..." className="cartoonImg" src="https://vignette.wikia.nocookie.net/rocketpower/images/1/10/Twister_with_his_arms_crossed.png/revision/latest/scale-to-width-down/340?cb=20160417053939"></img>
                </div>
                <div className="col-md-4">
                    <img onClick={props.incrementButton} id="image9" alt="..." className="cartoonImg" src="https://vignette.wikia.nocookie.net/rocketpower/images/2/25/Reggie_Rocket4.png/revision/latest/scale-to-width-down/340?cb=20150701021115"></img>
                </div>
            </div>
        </div>
    )
}

export default CardBody;
import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function Parallax() {
    return (
        <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
                <div className="container">
                    <div className="row center">
                    </div>
                </div>
            </div>
            <div className="parallax"><img src="assets/images/bryce-canyon.jpg" alt="Unsplashed background img 2" />
            </div>
        </div>
    );
}

export default Parallax;

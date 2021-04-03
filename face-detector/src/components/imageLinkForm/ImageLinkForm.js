import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return(
        <div>
            <p className="f3">
                {"Want to detect some Faces in the picture? Give it a try."}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5 ">
                <input className="f4 pa2 w-70 center" type="text" placeholder="enter the url of the image."></input>
                <button className="w-30 f4 link ph3 pv2 dib white bg-light-purple grow br-pill">Detect</button>    
                </div>
            </div> 
        </div>
    );
}

export default ImageLinkForm;
import React from "react";
// import memesData from "../memsData.js"

export default function Form() {
    // const [meme, SetMeme] = React.useState({
    //     topText: "",
    //     bottomText: "",
    //     randomImage: "http://i.imgflip.com/lbij.jpg"
    // });

    //const [allMemeImages, setMemeImages] = React.useState(memesData);
    
    // function getmemeImage() {
    //     const memeArray = memesData.data.memes;
    //     const randomNumber = Math.floor(Math.random() * memeArray.length);
    //     SetMeme(memeArray[randomNumber].url);
    // }

    return (
        <div className="main">
            <form>
                <input type="text" className="form-inputs" placeholder="Top Text" required/>
                <input type="text" className="form-inputs" placeholder="Bottom Text" required/>
                <button /*onClick={getMemeImage}*/>Get a new meme image</button>
            </form>
            <img className="meme" src="meme.randomImage" alt="meme goes here"/>
        </div>
    )
}
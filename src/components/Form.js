import React from "react";

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="main">
            <form>
                <input 
                    required
                    type="text" 
                    className="form-inputs"
                    name = "topText"
                    value = {meme.topText} 
                    onChange={handleChange}
                    placeholder="Top Text" 
                />

                <input 
                    required
                    type="text" 
                    className="form-inputs" 
                    name = "bottomText"
                    value = {meme.bottomText}
                    onChange={handleChange}
                    placeholder="Bottom Text" 
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image
                </button>
            </form>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="meme goes here" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
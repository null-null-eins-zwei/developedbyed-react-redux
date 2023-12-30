import { useState } from "react";

const CreateTweet = () => {

    const [textInput, setTextInput] = useState("");

    // Methods
    const userInputHandler = (e) => {
        console.log(e);
        setTextInput(e.target.value);
    }

    return (
        <form>
            <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5" />
            <button>Submit</button>
            <small onClick={() => setTextInput("")}>{textInput}</small>
        </form>
    );
}

export default CreateTweet;
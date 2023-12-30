
const CreateTweet = ({textInput, setTextInput, allTweets, setTweets}) => {
    // Methods
    const userInputHandler = (e) => {
        console.log(e);
        setTextInput(e.target.value);
    }

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...allTweets, textInput]);
        setTextInput("");
    }

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5" />
            <button>Submit</button>
            <small onClick={() => setTextInput("")}>{textInput}</small>
        </form>
    );
}

export default CreateTweet;
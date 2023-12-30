
const Tweet = ({id, author, tweet, allTweets, setTweets}) => {

    const deleteHandler = () => {
        setTweets(
            allTweets.filter((t) => t !== tweet));
    }

    return (
        <div className="tweet">
            <h2>Name {author}</h2>
            <h3>{tweet}</h3>
            <button onClick={() => deleteHandler()}>Delete</button>
            <button>Like</button>
        </div>
    );
}

export default Tweet;
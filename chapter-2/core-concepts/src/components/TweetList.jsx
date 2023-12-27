import Tweet from "./Tweet";

const TweetList = ({author, messages}) => {
    return (
        <div className="Tweet-list">
            <Tweet
                author={author}
                message={messages[0]}
            />
            <Tweet
                author={author}
                message={messages[1]}
            />
            <Tweet
                author={author}
                message={messages[2]}
            />
        </div>
    );
}

export default TweetList;
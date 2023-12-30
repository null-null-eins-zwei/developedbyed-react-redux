import Tweet from "./Tweet";

const TweetList = ({author, messages}) => {
    return (
        <div className="Tweet-list">
            <Tweet
                author={author}
                message={messages.at(-3)}
            />
            <Tweet
                author={author}
                message={messages.at(-2)}
            />
            <Tweet
                author={author}
                message={messages.at(-1)}
            />

            <Tweet
                author={author}
                message={messages[0]}
            />

            <Tweet
                author={author}
                message={messages[1]}
            />
        </div>
    );
}

export default TweetList;
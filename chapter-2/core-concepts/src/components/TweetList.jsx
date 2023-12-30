import Tweet from "./Tweet";

const TweetList = ({ author, allTweets, setTweets }) => {

    return (
        <div className="Tweet-list">
            {
                allTweets.map((tweet, i) => {
                    return <Tweet
                        id = {i}
                        author = {author}
                        tweet = {tweet}
                        allTweets = {allTweets}
                        setTweets = {setTweets}
                    />
                })
            }
        </div>
    );
}

export default TweetList;
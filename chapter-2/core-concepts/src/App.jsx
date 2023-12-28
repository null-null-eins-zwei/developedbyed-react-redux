import CreateTweet from "./components/CreateTweet"
import TweetList from "./components/TweetList";

function App() {
  // Here is a place for notmal JS
  const author = "Serhii";
  const messages = [
    "Oh no!",
    "OH NO!",
    "OH NO-NO-NO!"
  ];

  function sayHalloHandler(message){
    console.log(`Hallo! This is message for you: '${message}'`);
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
      <button onClick={() => sayHalloHandler(author)}>Hallo</button>
      
      <CreateTweet />
      <TweetList 
        author = {author}
        messages={messages}/>

    </div>
  );
}

export default App;

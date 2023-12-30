import CreateTweet from "./components/CreateTweet"
import TweetList from "./components/TweetList";
import { useState } from "react";

function App() {
  // Here is a place for notmal JS
  let authorWithoutState = "Serhii";
  const [author, setAuthor] = useState('Serhii');

  const [textInput, setTextInput] = useState("");
  const [allTweets, setTweets] = useState([]);

  function sayHalloHandler(message){
    console.log(`Hallo! This is message for you: '${message}'`);
  }

  function changeAuthorDirectHandler(){
    // This update variable, but do not update page
    authorWithoutState = "krb3d";
    console.log(authorWithoutState);
  }
 
  function changeAuthorHandler(){
    // This update variable, but do not update page
    setAuthor("krb3d");
    console.log(author);
  }
 
  return (
    <div className="App">
      <h1>Hello {authorWithoutState} / {author}</h1>
      <button onClick={() => sayHalloHandler(authorWithoutState)}>Say Hallo</button><br />
      <button onClick={changeAuthorDirectHandler}>Change author name without state</button><br />
      <button onClick={changeAuthorHandler}>Change author name WITH state</button><br />
      
      <CreateTweet
        textInput = {textInput}
        setTextInput = {setTextInput}
        allTweets = {allTweets}
        setTweets = {setTweets} />

      <TweetList 
        author = {author}
        allTweets = {allTweets}
        setTweets = {setTweets} />

    </div>
  );
}

export default App;

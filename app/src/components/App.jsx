import React from "react";
import Dictionary from "./dict";
import emojipedia from "../emojipedia";

function CreateEntry(emojiTerm){
  return (
    < Dictionary
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />

  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateEntry)}</dl> 

    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = () => {
    setIsEditing(() => !isEditing);
  };

  function handleChange(e){
    console.log(e.target.value)
    setPlayerName(e.target.value)
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" placeholder="type your name" value={playerName} onChange={handleChange} />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

import React, { useState } from 'react';

const SmileyList = () => {
  const [smiles, setSmiles] = useState([
    { id: 1, emoji: '🍔', count: 0 },
    { id: 2, emoji: '🍕', count: 0 },
    { id: 3, emoji: '🍎', count: 0 },
  ]);

  const handler = (id) => {
    setSmiles((prevSmiles) =>
      prevSmiles.map((smile) =>
        smile.id === id ? { ...smile, count: smile.count + 1 } : smile
      )
    );
  };

  const showResults = () => {
    const winner = smiles.reduce((prev, current) =>
      prev.count > current.count ? prev : current
    );
    alert(`Переможець: ${winner.emoji}. Кількість голосів: ${winner.count}`);
  };

  return (
    <div>
      <h2>Змагання смайликів</h2>
      <ul>
        {smiles.map((smile) => (
          <li key={smile.id}>
            <span>{smile.emoji}</span>
            <br />
            <button onClick={() => handler(smile.id)}>Голосувати</button>
            <br />
            <span>{smile.count}</span>
          </li>
        ))}
      </ul>
      <button onClick={showResults}>Показати переможця</button>
    </div>
  );
};

export default SmileyList;
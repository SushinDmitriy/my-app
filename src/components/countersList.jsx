import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 2, name: "Вилка" },
    { id: 3, value: 4, name: "Тарелка" },
    { id: 4, value: 5, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handeleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handeleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    setCounters((counters) => {
      return counters.map((count) => {
        if (count.id === id) {
          return {
            ...count,
            value: ++count.value,
          };
        }
        return count;
      });
    });
  };
  const handleDecrement = (id) => {
    setCounters((counters) => {
      return counters.map((count) => {
        if (count.id === id) {
          return {
            ...count,
            value: --count.value,
          };
        }
        return count;
      });
    });
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handeleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handeleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;

import React, { SetStateAction } from 'react';
import Column from './Column';
import { Cols } from '@/interfaces/cols';
import { Cards } from '@/interfaces/cards';

type Props = {
  cols: Cols;
  cards: Cards;
  setCards: SetStateAction<any>;
};

function Columns({ cols, cards, setCards }: Props) {
  return (
    <>
      {/* add a skeleton for later api call */}
      {cols.map((col) => (
        <Column
          key={col.id}
          col={col}
          cards={cards
            .sort((a, b) => a.index - b.index)
            .filter((card) => card.columnId === col.id)}
          setCards={setCards}
        />
      ))}
    </>
  );
}

export default Columns;

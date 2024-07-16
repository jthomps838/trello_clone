import React, { SetStateAction } from 'react';

import Card from './Card';
import { Col } from '@/interfaces/cols';
import { CardInterface, Cards } from '@/interfaces/cards';
import { ReactSortable } from 'react-sortablejs';

type Props = {
  col: Col;
  cards: Cards;
  setCards: SetStateAction<any>;
};

function Column({ col, cards, setCards }: Props) {
  const setCardsForColumn = (sortedCards: Cards, colId: string) => {
    setCards((prev: Cards) => {
      const newCards = [...prev];
      sortedCards.forEach((c: CardInterface, i: number) => {
        const foundCard = newCards.find((newCard) => newCard.id === c.id);
        if (foundCard) {
          foundCard.index = i;
          foundCard.columnId = colId;
        }
      });
      return newCards;
    });
  };
  return (
    <section key={col.id} className='w-48 bg-white shadow-md rounded-md p-2'>
      <h3>{col.name}</h3>
      {/* create skeleton for cards */}
      <ReactSortable
        list={cards}
        setList={(cards) => setCardsForColumn(cards, col.id)}
        group='cards'
        className='min-h-12'
        ghostClass='opacity-40'
      >
        {cards.map((card: CardInterface) => (
          <Card key={card.id} {...card} />
        ))}
      </ReactSortable>
    </section>
  );
}

export default Column;

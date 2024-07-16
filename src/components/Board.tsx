'use client';

import React, { useState } from 'react';
import ColumnForm from './forms/ColumnForm';
import Columns from './Columns';
import { Cols } from '@/interfaces/cols';
import { Cards } from '@/interfaces/cards';

type Props = {};

const defaultCards: Cards = [
  { id: '1', name: 'task 1', index: 0, columnId: 'col2' },
  { id: '2', name: 'task 2', index: 0, columnId: 'col1' },
  { id: '3', name: 'task 3', index: 1, columnId: 'col2' },
  { id: '4', name: 'task 4', index: 0, columnId: 'col3' },
  { id: '5', name: 'task 5', index: 1, columnId: 'col1' },
];

const defaultCols: Cols = [
  { id: 'col1', name: 'todo', index: 0 },
  { id: 'col2', name: 'in progress', index: 1 },
  { id: 'col3', name: 'done', index: 2 },
];

const Board = (props: Props) => {
  const [cards, setCards] = useState(defaultCards);
  const [cols, setCols] = useState(defaultCols);
  return (
    <section className='flex gap-4'>
      <Columns cols={cols} cards={cards} setCards={setCards} />
      <ColumnForm />
    </section>
  );
};

export default Board;

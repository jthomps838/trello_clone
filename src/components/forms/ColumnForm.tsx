'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';

type Props = {};

const ColumnForm = (props: Props) => {
  const [colName, setCalName] = useState('');

  const handleNewColumn = (e: FormEvent) => {
    e.preventDefault();
    alert('new column: ' + colName);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void =>
    setCalName(e.target.value);

  return (
    <form onSubmit={handleNewColumn} className='max-w-xs'>
      <label className='block'>
        <input
          type='text'
          className='bg-inherit text-gray-500 border-gray-300'
          onChange={handleInput}
          value={colName}
          placeholder='new column name'
        />
      </label>
      <button type='submit' className='mt-2 block w-full'>
        Create Column
      </button>
    </form>
  );
};

export default ColumnForm;

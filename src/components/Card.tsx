import { CardInterface } from '@/interfaces/cards';
import React from 'react';

const Card = ({ name }: CardInterface) => {
  return (
    <section className='border my-2 p-4 rounded-md'>
      <span>{name}</span>
    </section>
  );
};

export default Card;

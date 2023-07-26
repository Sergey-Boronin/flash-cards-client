import {useEffect, useState} from 'react';
import cn from 'classnames';
import styles from './CardsList.module.css';

interface Card {
  _id: string;
  term: string;
  definition: string;
}

export const CardsList = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const fetchCards = async () => {
    try {
      const response = await fetch('http://localhost:3001/cards');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <li className={styles.card} key={card._id}>
            <span className={cn(styles.term, styles.cardItem)}>
              {card.term}
            </span>
            <span className={cn(styles.definition, styles.cardItem)}>
              {card.definition}
            </span>
            <div className={cn(styles.controls, styles.cardItem)}>1</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

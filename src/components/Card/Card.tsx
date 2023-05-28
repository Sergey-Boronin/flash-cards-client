import {useState} from 'react';
import cn from 'classnames';
import styles from './Card.module.css';

console.log(styles);

const card = {
  frontText: 'Голова',
  backText: 'Head',
};

export const Card = () => {
  const [reverse, setReverse] = useState(false);

  const speak = (
    e: React.MouseEvent<HTMLElement>,
    text: string,
    lang: string,
  ) => {
    console.log(this);
    e.stopPropagation();
    console.log(e);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    speechSynthesis.cancel(); // Отменяем предыдущие озвучивания
    speechSynthesis.speak(utterance);
  };

  const cardReverse = () => {
    setReverse((prev) => !prev);
    console.log(reverse);
  };

  return (
    <div className={styles.card}>
      <div className={styles.termsWrapper} onClick={cardReverse}>
        {/* <div className={styles.front}>{card.frontText}</div> */}
        <div
          className={cn(styles.front, {
            [styles.frontReversed]: reverse,
            [styles.blue]: reverse,
          })}
        >
          <button
            className={styles.speaker}
            onClick={(e) => speak(e, card.frontText, 'ru')}
          >
            Говори
          </button>
          {card.frontText}
        </div>
        <div
          className={cn(styles.back, {
            [styles.backReversed]: reverse,
            [styles.red]: reverse,
          })}
        >
          <button
            className={styles.speaker}
            onClick={(e) => speak(e, card.backText, 'en')}
          >
            Говори
          </button>
          {card.backText}
        </div>
      </div>
    </div>
  );
};

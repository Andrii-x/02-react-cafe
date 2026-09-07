import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import type { VoteType, Votes } from '../../types/votes';
import css from './App.module.css';

const initialVotes: Votes = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  const handleVote = (type: VoteType) => {
    setVotes(currentVotes => ({ ...currentVotes, [type]: currentVotes[type] + 1 }));
  };

  const resetVotes = () => setVotes(initialVotes);

  return (
    <main className={css.app}>
      <div className={css.decor} aria-hidden="true">✳</div>
      <div className={css.layout}>
        <CafeInfo />
        <section className={css.feedback} aria-label="Cafe feedback">
          <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
          {totalVotes > 0 ? (
            <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
          ) : (
            <Notification />
          )}
        </section>
      </div>
      <footer className={css.footer}>Fresh coffee. Honest feedback.</footer>
    </main>
  );
}

import type { Votes } from '../../types/votes';
import css from './VoteStats.module.css';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
  return (
    <div className={css.container}>
      <div className={css.heading}><span className={css.label}>Today&apos;s pulse</span><strong className={css.total}>{totalVotes}</strong></div>
      <div className={css.stats}>
        <p className={`${css.stat} ${css.good}`}><span>Good</span><strong>{votes.good}</strong></p>
        <p className={`${css.stat} ${css.neutral}`}><span>Neutral</span><strong>{votes.neutral}</strong></p>
        <p className={`${css.stat} ${css.bad}`}><span>Bad</span><strong>{votes.bad}</strong></p>
      </div>
      <div className={css.positive}><span>Positive experience</span><strong>{positiveRate}%</strong></div>
    </div>
  );
}

export type { VoteStatsProps };
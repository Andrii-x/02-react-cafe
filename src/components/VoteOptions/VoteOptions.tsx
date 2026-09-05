import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const options: Array<{ type: VoteType; label: string; icon: string }> = [
  { type: 'good', label: 'Good', icon: '↑' },
  { type: 'neutral', label: 'Neutral', icon: '→' },
  { type: 'bad', label: 'Bad', icon: '↓' },
];

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <div className={css.options}>
        {options.map(({ type, label, icon }) => (
          <button key={type} className={`${css.button} ${css[type]}`} onClick={() => onVote(type)}>
            <span className={css.icon} aria-hidden="true">{icon}</span>{label}
          </button>
        ))}
      </div>
      {canReset && <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset responses</button>}
    </div>
  );
}

export type { VoteOptionsProps };
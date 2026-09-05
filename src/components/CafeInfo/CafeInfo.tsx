import css from './CafeInfo.module.css';

export default function CafeInfo() {
  return (
    <div className={css.container}>
      <p className={css.eyebrow}>A little note from the counter</p>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>Please rate our service by selecting one of the options below.</p>
    </div>
  );
}
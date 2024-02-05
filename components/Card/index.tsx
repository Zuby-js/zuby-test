import styles from './index.module.css';

export default function Card({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <li className={styles.linkCard}>
      <a href={href}>
        <h2 className={styles.h2}>
          {title}
          <span>&rarr;</span>
        </h2>
        <p className={styles.p}>{body}</p>
      </a>
    </li>
  );
}

import Link from "next/link";
import styles from "./UserCard.module.css";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
  bio: string | null;
}

export default function UserCard({ id, name, age, image, bio }: Props) {
  return (
    <div className={styles.card}>
      <Link href={`/users/${id}`}>
        <img
          src={image ?? "/mememan.webp"}
          alt={`${name}'s profile`}
          className={styles.cardImage}
        />
        <div className={styles.cardContent}>
          <h3>{name}</h3>
          <p>Age: {age}</p>
          <p>Bio: {bio}</p>
        </div>
      </Link>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("api/auth/signin");
  }
  return <main className={styles.main}>
     <div>
      <h1>Welcome to MySpace mockup!</h1>
      <p>To start Authorize github</p>
    </div>
  </main>;
}

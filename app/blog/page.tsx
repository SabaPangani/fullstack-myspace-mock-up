import Link from "next/link";
import classes from "./blogs.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
export default async function Blog() {
  const posts = await fetch("http://localhost:3000/api/content").then((res) =>
    res.json()
  );
  return (
    <div className={classes.wrapper}>
      <h1>Welcome to our Blog</h1>
      <ul className={classes.blogs}>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { ProfileForm } from "./ProfileForm";
import { prisma } from "@/lib/prisma";
export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  
  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: { email: currentUserEmail },
  });
  return (
    <div>
      <h1>Dashboard</h1>
      <ProfileForm user={user} />
    </div>
  );
}

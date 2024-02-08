import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className={`flex flex-col`}>
      <p className={``}>Authenticated user</p>
      <UserButton/>
    </div>
  );
}

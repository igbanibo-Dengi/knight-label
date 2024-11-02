import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href="/artists">Artists</Link>
    </div>
  );
}

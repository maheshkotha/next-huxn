"use client"
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: "500"
})

export default function Home() {
  const router = useRouter();

  return (
        <section>
          <h2>Google Fonts</h2>
          <h3 className={roboto.className}>Hello this is Robot font</h3>

          <h1>useRouter</h1>
          <button className="border px-2 py-4" onClick={() => router.push('/about')}>Go to About page</button>
          <button className="border px-2 py-4" onClick={() => router.push('/login')}>Go to Login page</button>
          <button className="border px-2 py-4" onClick={() => router.push('/register')}>Go to Register page</button>
        </section>
  );
}

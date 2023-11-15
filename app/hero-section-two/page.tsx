import Link from "next/link";

export default function HeroSectionTwo() {
  return (
    <section
      className="flex flex-col min-h-screen text-white bg-fixed bg-center bg-cover bg-slate-800 bg-blend-overlay bg-black/30"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/')",
      }}
    >
      <div className="flex items-center h-20">
        <div className="relative flex items-center justify-end w-full max-w-screen-xl px-5 mx-auto">
          <div className="absolute text-4xl font-light uppercase -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            Hero Section
          </div>

          <nav className="flex gap-5">
            <Link href="/">Home</Link>
            <Link href="/hero-section-one">Hero-1</Link>
            <Link href="/hero-section-three">Hero-3</Link>
          </nav>
        </div>
      </div>

      <div className="flex items-center flex-1">
        <div className="mx-auto text-center">
          <h1 className="text-6xl font-semibold">Welcome to this page!</h1>
          <p className="mt-5 text-3xl font-light">Words, stuffs, and things.</p>
          <a
            className="inline-block px-5 py-2 mt-10 text-white transition-colors bg-cyan-500 hover:bg-cyan-400"
            href=""
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

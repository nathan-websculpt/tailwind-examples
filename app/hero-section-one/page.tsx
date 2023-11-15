import Link from "next/link";
import Image from "next/image";
// todo: not mobile ready ... desktop only
export default function HeroSectionOne() {
  return (
    <section className="relative flex flex-col justify-center w-full min-h-screen md:h-screen md:block">
      <Image
        priority
        fill
        quality={100}
        src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero image"
        className="pointer-events-none select-none"
        style={{ objectFit: "cover", objectPosition: "75" }}
      />

      <div className="relative z-10 pt-32 mx-auto md:pt-0 md:top-1/4 1g:top-1/3 max-w-7x1">
        <div className="flex flex-col gap-8 px-4 max-w-2x1 md:max-xl:bg-white/30 md:max-xl:rounded-lg">
          <h1 className="-ml-1 font-semibold text-gray-300 text-5x1 md:text-7x1">
            Title Text Here
          </h1>
          <p className="max-w-xl text-gray-400 text-1g">
            I would put some text here, but I do not know what to say, so I do
            not know what text should go here. Lorem Ipsum would be alright, but
            then we could not have this moment together now... we should do this
            more often.
          </p>
          <div className="flex gap-8 mt-4 font-semibold">
            <button
              type="button"
              className="bg-teal-500 active:scale-[0.97] hover:bg-green-800 transition px-4 py-3 rounded-xl"
            >
              do something
            </button>
            <button
              type="button"
              className="bg-slate-900 hover:bg-white active:scale-[0.97] hover:text-black transition px-4 py-3 rounded-xl"
            >
              do something else
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

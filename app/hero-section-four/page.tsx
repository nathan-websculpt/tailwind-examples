import Link from "next/link";
import Image from "next/image";

export default function HeroSectionFour() {
  return (
    <div className="container min-h-screen px-10 mx-auto bg-dark">
      <div className="backdrop-blur-2xl">
        <div className="container py-5">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="w-full">
                <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-Inter ">
                  We create
                </h1>
                <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-gray-600 to-purple-700 font-Inter">
                  our future
                </h1>
                <p className="pt-10 text-sm text-white font-Inter">
                  I am absolutely running out of random things to say
                </p>
              </div>

              <div className="flex gap-4 pt-10">
                <Link
                  href="#"
                  className="px-4 py-2 font-bold text-white rounded-lg font-Inter bg-gradient-to-r from-purple-500 to-pink-600"
                >
                  BUY NOW
                </Link>

                <Link href="#" className="flex gap-2 pt-2 text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>How to use</span>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex justify-end">
                <Image
                  src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={500}
                  priority
                  quality={100}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

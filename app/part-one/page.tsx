import Link from "next/link";

export default function PartOne() {
  return (
    <div className="mt-1">
      <div className="container flex mx-auto bg-white h-96">
        <div className="flex items-center px-8 text-center lg:text-left md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Welcome to <span className="text-pink-600">Your-name</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Welcome to my Personal website. Here you can get to know About me
              and as well as you can explore the blogs section and get to know
              what sort of things I post here.
            </p>
            <div className="flex justify-center mt-6 lg:justify-start">
              <button className="px-5 py-3 mt-2 mr-2 text-sm text-white bg-pink-500 shadow-xl md:mt-0 md:mr-0 rounded-xl hover:text-white hover:shadow-xl hover:shadow-pink-300/80 shadow-pink-400/40 hover:bg-pink-600">
                About me.
              </button>
              <button className="px-5 py-3 mt-2 ml-2 mr-2 text-sm text-white bg-pink-500 shadow-xl md:mt-0 md:mr-0 rounded-xl hover:text-white hover:shadow-xl hover:shadow-pink-300/80 shadow-pink-400/40 hover:bg-pink-600">
                Explore Blogs
              </button>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div
            className="object-cover h-full"
            style={{
              backgroundImage: "url('https://source.unsplash.com/random/')",
            }}
          >
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

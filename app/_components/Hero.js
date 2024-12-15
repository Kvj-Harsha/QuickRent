import Button from "./Button";

export default function Home() {
  return (
    <section>
      <div className="container py-24">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            🌿 Fresh Piks 2k25!
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium mt-6 mx-auto">
            Rent in a Few Clicks!
          </h1>
          <p className="text-lg sm:text-xl text-white/50 mt-6 p-3 max-w-2xl mx-auto">
            QuickRent helps you find your perfect rental in minutes. Fast, easy,
            and hassle-free – your next home is just a few clicks away!
          </p>
          <div className="p-4 w-full">
            <form className="flex items-center justify-center border border-white/25 rounded-full p-2 mt-8 max-w-lg w-full mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 flex-grow text-lg text-white/50 placeholder-white/50 focus:outline-none"
              />
              <Button variant="primary" type="submit" size="small" className="whitespace-nowrap ml-4">
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

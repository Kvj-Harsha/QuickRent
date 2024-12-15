import Button from "./Button";

export default function Home() {
  return (
    <section>
      <div className="container py-24">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            🌿 Fresh Piks 2k25!
          </div>
        </div>
        <h1 className="text-6xl font-medium text-center p-3 mt-6">
          Find Your Perfect Space in Just a Few Clicks!
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 p-3">
          QuickRent helps you find your perfect rental in minutes. Fast, easy,
          and hassle-free – your next home is just a few clicks away!
        </p>
        <div className="p-4">
        <form className="flex border border-white/25 rounded-full p-2 mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 flex-grow"
          />
          <Button variant="primary" type="submit" size="small" className="whitespace-nowrap">
            Sign Up
          </Button>
        </form>
        </div>
      </div>
    </section>
  );
}

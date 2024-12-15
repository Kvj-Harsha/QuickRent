import Button from "./Button";


export default function Home() {
  return (
    <section>
      {/* Google Fonts Preconnect & Font Link */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
        rel="stylesheet"
      />

      <div className="container py-20 relative">
       
        <div className="flex flex-col items-center justify-center gap-4 text-center">
        
          <h1 className="text-6xl md:text-6xl  font-medium mt-6 mx-auto">
            Find the Perfect Rent <br /> in a Few Clicks!
          </h1>
          <p className="text-lg sm:text-xl text-white/50 mt-6 p-3 max-w-2xl mx-auto">
            QuickRent helps you find your perfect rental in minutes. Fast, easy,
            and hassle-free – your next home is just a few clicks away!
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="primary" ><a href="/Gadgets">Let's Rent</a></Button>

            </div>
          <div className="p-4  w-full">
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


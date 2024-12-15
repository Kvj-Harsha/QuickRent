import Navbar from '/app/_components/Navbar'
import Shop from '/app/_components/Shop'

export default function(){
    return <section>
              {/* Google Fonts Preconnect & Font Link */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
        rel="stylesheet"
      />

        <Navbar/>
        

        <Shop/>

    </section>
}
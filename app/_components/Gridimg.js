import { FocusCards } from "/app/_components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "iphone 16 pro Max",
      src: "/hiphone.png",
    },
    {
      title: "Lenovo HyGen",
      src: "/maccc.jpg",
    },
    {
      title: "Sony Fx100",
      src: "/sonyy.jpg",
    },
    {
      title: "Dji Mavic 3",
      src: "/dont.avif",
    },
    {
      title: "Apple Vision Pro",
      src: "/appp.jpg",
    },
    {
      title: "boAt Stone 1350 Speaker",
      src: "/boat.webp",
    },
  ];

  return <FocusCards cards={cards} />;
}

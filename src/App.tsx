import { useEffect, useState } from "react";
import "./App.css";

const getRandomInt = () => ~~(Math.random() * 10);

function getOrCreateCardCookie() {
  let card = document.cookie.split("; ").find((row) => row.startsWith("card="));

  if (!card) {
    card = "card=" + getRandomInt(); // Replace this with your desired value
    document.cookie = card + ";expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }

  return +card.split("=")[1];
}

function App() {
  const [card, setCard] = useState<number>();
  useEffect(() => {
    setCard(getOrCreateCardCookie());
  }, []);
  return <div>隨機圖圖 {card}</div>;
}

export default App;

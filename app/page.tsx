
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Description from "./components/Description";
import Amenities from "./components/Amenities";
import EventOp from "./components/EventOp";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Carousel />
      <Description />
      <Amenities />
      <EventOp />
    </main>
  );
}

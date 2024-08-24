import { getInfo, textFormat } from "@/lib";
import styles from "./page.module.css";
import Image from "next/image";
import airportImage from "@/public/images/airport.jpg";

export async function generateMetadata({ params }) {
  const info = await getInfo(params.airline, params.terminal);
  const title = `What terminal is ${textFormat(params.airline)} at ${
    info.code
  } - ${info.airport}?`;
  return {
    title,
    description: title,
  };
}

export default async function TerminalPage({ params }) {
  const info = await getInfo(params.airline, params.terminal);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{`${textFormat(params.airline)} ${
        info.code
      } Terminal - ${info.airport}`}</h1>
      <div className={styles.image}>
        <Image src={airportImage} width={800} alt="Airport Terminal" priority />
      </div>
      <h2 className={styles.subheading}>{`${info.airport} (${info.code})`}</h2>
      <div className={styles.info}>
        <h3>Location Details</h3>
        <div>
          <p>
            <span className={styles.bold}>Address: </span>
            {info.address}
          </p>
          <p>
            <span className={styles.bold}>Phone Number: </span>
            {info.phone}
          </p>
          <p>
            <span className={styles.bold}>Departure Terminal: </span>
            {info.departure}
          </p>
          <p>
            <span className={styles.bold}>Arrival Terminal: </span>
            {info.arrival}
          </p>
          <p>
            <span className={styles.bold}>IATA Code: </span>
            {info.iata}
          </p>
          <p>
            <span className={styles.bold}>ICAO Code: </span>
            {info.icao}
          </p>
          <p>
            <span className={styles.bold}>City: </span>
            {info.city}
          </p>
          <p>
            <span className={styles.bold}>Country: </span>
            {info.country}
          </p>
          <p>
            <span className={styles.bold}>Status: </span>
            {info.status}
          </p>
          <p>
            <span className={styles.bold}>Website: </span>
            {info.website}
          </p>
          <p>
            <span className={styles.bold}>YouTube: </span>
            {info.youtube}
          </p>
          <p>
            <span className={styles.bold}>Facebook:</span>
            {info.facebook}
          </p>
          <p>
            <span className={styles.bold}>Twitter: </span>
            {info.twitter}
          </p>
          <p>
            <span className={styles.bold}>Instagram: </span>
            {info.instagram}
          </p>
        </div>
      </div>
    </div>
  );
}

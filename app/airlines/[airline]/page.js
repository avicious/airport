import { getAirline, getTerminal, textFormat } from "@/lib";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const airline = await getAirline(params.airline);

  if (!airline) {
    notFound();
  }

  return {
    title: `${textFormat(airline)} | Airport Terminals`,
    description: `${textFormat(airline)}`,
  };
}

export default async function AirlinePage({ params }) {
  const airline = await getAirline(params.airline);
  const terminals = await getTerminal(params.airline);

  if (!airline) {
    notFound();
  }

  return (
    <>
      <h1 className={styles.heading}>{textFormat(airline)}</h1>
      <div className={styles.container}>
        {terminals.map((terminal) => (
          <Link
            key={terminal.terminal}
            href={`/airlines/${params.airline}/${terminal.terminal}`}
          >
            {`What terminal is ${textFormat(airline)} at ${terminal.code} - ${
              terminal.airport
            }?`}
          </Link>
        ))}
      </div>
    </>
  );
}

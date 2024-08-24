import Link from "next/link";
import styles from "./page.module.css";
import { getData, textFormat } from "@/lib";

export const metadata = {
  title: "All Airlines | Airport Terminals",
  description: "Airport Terminals Description",
};

export default async function AirlinesPage() {
  const data = await getData();
  const airlines = Object.keys(data);
  return (
    <>
      <h1 className={styles.heading}>All Airlines</h1>
      <div className={styles.container}>
        {airlines.map((airline) => (
          <Link key={airline} href={`/airlines/${airline}`}>
            {textFormat(airline)}
          </Link>
        ))}
      </div>
    </>
  );
}

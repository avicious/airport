import { promises as fs } from "fs";

export const textFormat = (string) => {
  return string
    .split("-")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
};

export const getData = async () => {
  const file = await fs.readFile(process.cwd() + "/data/data.json", "utf-8");
  return JSON.parse(file);
};

export const getAirline = async (airline) => {
  const data = await getData();
  const airlines = Object.keys(data);
  return airlines.find((name) => name === airline);
};

export const getTerminal = async (airline) => {
  const data = await getData();
  return data[airline];
};

export const getInfo = async (airline, terminal) => {
  const data = await getTerminal(airline);
  return data.find((name) => name.terminal === terminal);
};

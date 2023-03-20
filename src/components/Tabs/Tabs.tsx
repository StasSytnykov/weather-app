import Link from "next/link";

export const Tabs = () => (
  <ul className="flex mb-6">
    <li className="text-gray-700 font-medium mr-5 hover:opacity-75 focus:opacity-75">
      <Link href="/current">Current Weather</Link>
    </li>
    <li className="text-gray-700 font-medium mr-5 hover:opacity-75 focus:opacity-75">
      <Link href="/hourly">Hourly Forecast</Link>
    </li>
    <li className="text-gray-700 font-medium hover:opacity-75 focus:opacity-75">
      <Link href="/daily">Daily Forecast</Link>
    </li>
  </ul>
);

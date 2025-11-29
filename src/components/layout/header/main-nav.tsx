import Link from "next/link";

export const MainNav = () => {
  return (
    <>
      <nav>
        <ul className="flex items-center divide-x divide-gray-500 gap-2">
          <li className="p-1 pr-2">
            <Link
              className="text-white font-bold font-anton-sc uppercase hover:text-gray-300 ease-in"
              href={"#"}
            >
              All Games
            </Link>
          </li>
          <li className="p-1 pr-2">
            <Link
              className="text-white font-bold font-anton-sc uppercase hover:text-gray-300 ease-in"
              href={"#"}
            >
              Tournaments
            </Link>
          </li>
          <li className="p-1 pr-2">
            <Link
              className="text-white font-bold font-anton-sc uppercase hover:text-gray-300 ease-in"
              href={"#"}
            >
              Leaderboard
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

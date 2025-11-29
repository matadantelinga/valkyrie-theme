"use client";

import Link from "next/link";
import Container from "./container";
import { SocialButtons } from "./social-buttons";

export const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="grid grid-cols-12 py-4">
            <div className="col-span-12">
              <ul className="flex items-center justify-center divide-x divide-gray-500 gap-2">
                <li className="pl-6 pr-6">
                  <Link
                    className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
                    href={"#"}
                  >
                    All Games
                  </Link>
                </li>
                <li className="pl-6 pr-6">
                  <Link
                    className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
                    href={"#"}
                  >
                    About
                  </Link>
                </li>
                <li className="pl-6 pr-6">
                  <Link
                    className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
                    href={"#"}
                  >
                    Affiliates
                  </Link>
                </li>
                <li className="pl-6 pr-6">
                  <Link
                    className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
                    href={"#"}
                  >
                    Operator
                  </Link>
                </li>
                <li className="pl-6 pr-6">
                  <Link
                    className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
                    href={"#"}
                  >
                    FAQ
                  </Link>
                </li>
                <li className="pl-6 pr-6">
                  <Link
                    className="text-gray-300 font-bold font-anton-sc uppercase hover:text-gray-400 ease-in"
                    href={"#"}
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12">
              <div className="py-6 max-w-[50%] m-auto">
                <div className="text-center text-gray-300 text-sm">
                  &copy; 2025, Valkyrie Studio
                </div>
                <div className="text-center text-gray-300 text-sm">
                  All product and company names are trademarks or registered
                  trademarks of their respective holders. Use of them does not
                  imply any affiliation with or endorsement by them.
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="text-center text-gray-300 text-sm mb-4">Follow Us</div>
              <SocialButtons />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

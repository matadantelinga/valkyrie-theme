"use client";

import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "../../ui/input";
import Container from "../container";
import { SocialButtons } from "../social-buttons";
import { MainNav } from "./main-nav";

export const Header = () => {
  return (
    <>
      <Container>
        <header className="flex gap-2 items-center">
          <div className="logo-wrapper flex-1">
            <Image
              src={"/images/logo.svg"}
              width={153}
              height={38}
              alt="Logo"
            />
          </div>
          <div className="burger-menu cursor-pointer flex gap-2 items-center">
            <div className=" polygon-border h-[42px] w-[42px] flex md:hidden justify-center items-center">
              <Search className="text-gray-400 md:text-c-red-light" />
            </div>
            <div className="polygon-border h-[42px] w-[42px] flex justify-center items-center">
              <Menu className="text-gray-400 md:text-c-red-light" />
            </div>
          </div>
          <div className="main-menu w-1/4 hidden md:block">
            <MainNav />
          </div>
          <div className="searchbar w-1/2 hidden md:block">
            <div className="flex items-center gap-2 border-[0.5px] border-[#1A1A1A] p-1">
              <div className="text-center">
                <Search className="text-gray-500" />
              </div>
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search"
                  className="hidden rounded-none! flex-1 border-none border-white/10 p-1 text-white md:block focus-visible:outline-0"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <SocialButtons />
          </div>
        </header>
      </Container>
    </>
  );
};

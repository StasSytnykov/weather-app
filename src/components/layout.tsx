import { Searchbar } from "@/components/Searchbar";
import { Tabs } from "@/components/Tabs/Tabs";
import React from "react";
import BackgroundImage from "../../public/weatherBackground.jpg";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-left absolute w-full h-full -z-50"
        style={{ backgroundImage: `url(${BackgroundImage.src})` }}
      />
      <div className="flex min-h-screen flex-col max-w-screen-xl pl-5 pr-5 ml-auto mr-auto">
        <header className="flex flex-col items-center">
          <Searchbar />
          <nav>
            <Tabs />
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-auto">
          <p className="flex justify-end font-light text-sm">
            Powered by&nbsp;
            <a href="https://www.weatherapi.com/" title="Free Weather API">
              WeatherAPI.com
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

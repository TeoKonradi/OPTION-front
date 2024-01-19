"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useLogout } from "../lib/api";
import { SideBarOption } from "../lib/consts";
import { setIsNotLogged } from "../store/LoginStatus";
import { cn } from "./ui";
import { Button } from "./ui/button";

const SideBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // console.log(location);
  // console.log(props);

  const options: SideBarOption[] = [
    {
      link: "/",
      title: "Main",
    },
    // {
    //   title: "Templates",
    //   link: "/templates",
    // },
    // {
    //   title: "Purchases",
    //   link: "/purchases",
    // },
    // {
    //   title: "Distribution",
    //   link: "/distribution",
    // },
    {
      link: "/brands",
      title: "Brands",
    },
    {
      link: "/products",
      title: "Products",
    },
    {
      link: "/settings",
      title: "Settings",
    },
  ];

  const SideBarElement = ({ option }: { option: SideBarOption }) => {
    const isActiveMain = location.pathname === "/" && option.link === "/";
    const notMain = option.link !== "/";
    const currentPage = notMain && option.link;
    const isActiveNotMain =
      !isActiveMain && currentPage ? location.pathname.startsWith(currentPage) : "";

    return (
      <Link
        className={cn(
          "z-30 flex w-56 items-center justify-start border-b-2 border-main bg-white p-8 text-4xl",
          isActiveMain && "bg-main text-white",
          isActiveNotMain && "bg-main text-white",
          "duration-500 ease-in-out",
        )}
        to={option.link}
      >
        <h2 className="text-2xl">{option.title}</h2>
      </Link>
    );
  };

  const Logo = () => {
    const [isLogoVisible, setIsLogoVisible] = useState(false);

    const handleScroll = () => {
      setIsLogoVisible(window.scrollY >= 100);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div
        className={cn(
          "fixed top-[80px] z-20 h-32 w-32 opacity-0",
          isLogoVisible && "translate-y-[-100px] opacity-100",
          "duration-300 ease-in-out",
        )}
      >
        <img alt="logo" className="h-full w-full" src="/gmLogo.svg" />
      </div>
    );
  };

  const { mutateAsync } = useLogout();

  const handleLogout = () => {
    mutateAsync();
    dispatch(setIsNotLogged());
  };

  // console.log("render");

  return (
    <div className="flex">
      <div className="h-0 w-0">
        <Logo />
      </div>
      <div className="sidebar-container group relative z-40 flex h-[650px] flex-col items-center border-2 border-main shadow-lg">
        {options.map((item: SideBarOption, i: number) => {
          return (
            <div className="flex" key={i}>
              <SideBarElement option={item} />
            </div>
          );
        })}
        <div className="mt-6 w-32">
          <Button
            onClick={() => {
              console.log("logOut");
              handleLogout();
            }}
          >
            logOut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

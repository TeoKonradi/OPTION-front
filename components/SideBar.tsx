"use client"

import { useEffect, useState } from "react";
import { SideBarOption } from "../lib/consts";
import { Button } from "./ui/button";
import { toggleScrollState } from "../store/ToogleScrollSlice";
import { useDispatch } from "react-redux";
import { cn } from "./ui";
import { useLogout } from "../lib/api";
import { setIsNotLogged } from "../store/LoginStatus";

const SideBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // console.log(location);
  // console.log(props);

  const options: SideBarOption[] = [
    {
      title: "Main",
      link: "/",
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
      title: "Brands",
      link: "/brands",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "Settings",
      link: "/settings",
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
        to={option.link}
        className={cn(
          "w-56 p-8 flex z-30 items-center justify-start border-b-2 bg-white border-main text-4xl",
          isActiveMain && "bg-main text-white",
          isActiveNotMain && "bg-main text-white",
          "ease-in-out duration-500"
        )}
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
          "fixed top-[80px] w-32 h-32 z-20 opacity-0",
          isLogoVisible && "translate-y-[-100px] opacity-100",
          "ease-in-out duration-300"
        )}
      >
        <img
          className="w-full h-full"
          src="/gmLogo.svg"
          alt="logo"
        />
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
      <div className="w-0 h-0">
        <Logo />
      </div>
      <div className="flex flex-col z-40 shadow-lg h-[650px] border-2 border-main sidebar-container relative group items-center">
        {options.map((item: SideBarOption, i: number) => {
          return (
            <div
              className="flex"
              key={i}
            >
              <SideBarElement option={item} />
            </div>
          );
        })}
        <div className="w-32 mt-6">
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

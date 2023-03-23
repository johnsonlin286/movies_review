import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Iconmovie from "../../public/images/iconmovie.svg";
import Iconsearch from "../../public/images/iconsearch.svg";

const HeaderSearch = () => {
  const searchContainer = useRef<HTMLDivElement>(null);
  const searchOptions = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    document.addEventListener("click", clickOutsideHandler);
    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  }, []);

  useEffect(() => {
    if (keyword && keyword.length > 3) {
      setShowOptions(true);
    } else hideOptions();
  }, [keyword]);

  const clickOutsideHandler = (event: Event) => {
    const target = event.target as HTMLButtonElement;
    if (searchContainer.current && !searchContainer.current.contains(target)) {
      hideOptions();
    }
  };

  const hideOptions = () => {
    if (searchOptions.current) {
      searchOptions.current.classList.add("close");
      searchOptions.current.addEventListener("animationend", () =>
        setShowOptions(false)
      );
    }
  };

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <div
      ref={searchContainer}
      className="header-search flex-grow relative bg-black/20 rounded py-[6px] px-[10px]"
    >
      <div className="header-search__input flex items-center">
        <Image src={Iconmovie} alt="iconmovie" />
        <input
          type="text"
          placeholder="Find movie"
          value={keyword}
          onChange={onInputChangeHandler}
          className="flex-grow bg-transparent text-white active:outline-none focus:outline-none px-3 placeholder:text-white"
        />
        <button>
          <Image src={Iconsearch} alt="iconsearch" />
        </button>
      </div>
      {showOptions && (
        <div
          ref={searchOptions}
          className="header-search__options bg-black/90 absolute w-full rounded-b-lg left-0 top-full p-[18px] mt-[1px]"
        >
          <ul className="text-sm text-white">
            <li className="pb-[15px] last:pb-0">Lorem Ipsum</li>
            <li className="pb-[15px] last:pb-0">Lorem Ipsum</li>
            <li className="pb-[15px] last:pb-0">Lorem Ipsum</li>
            <li className="pb-[15px] last:pb-0">Lorem Ipsum</li>
            <li className="pb-[15px] last:pb-0">Lorem Ipsum</li>
            <li className="pb-[15px] last:pb-0">Lorem Ipsum</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;

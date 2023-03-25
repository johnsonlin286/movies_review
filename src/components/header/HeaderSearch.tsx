import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import parse from 'html-react-parser';

import searchKeyword from '../../utils/searchKeyword';

import Iconmovie from "../../../public/images/iconmovie.svg";
import Iconsearch from "../../../public/images/iconsearch.svg";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Wonder Woman 1984',
  },
  {
    id: 'm2',
    title: 'Wonder Woman',
  },
  {
    id: 'm3',
    title: 'Wonder',
  },
  {
    id: 'm4',
    title: 'Wonder Woman: Bloodlines',
  },
  {
    id: 'm5',
    title: 'Wonder Park',
  },
  {
    id: 'm6',
    title: 'Wonder Boys',
  }
]

type SearchResult = {
  id: string,
  title: string
}

const HeaderSearch = () => {
  const searchContainer = useRef<HTMLDivElement>(null);
  const searchOptions = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [searchResult, setSearchResult] = useState<Array<SearchResult>>([]);

  useEffect(() => {
    document.addEventListener("click", clickOutsideHandler);
    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  }, []);

  useEffect(() => {
    if (keyword.length) {
      const result = searchKeyword(DUMMY_DATA, keyword);
      // console.log(result);
      setSearchResult(result);
      if (result.length > 0) setShowOptions(true);
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

  const onInputFocusHandler = () => {
    if (keyword && keyword.length > 3) {
      setShowOptions(true);
    }
  }

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
          onFocus={onInputFocusHandler}
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
            {
              searchResult.length > 0 && searchResult.map(result => (
                <li key={result?.id} className="capitalize pb-[15px] last:pb-0">{result ? parse(result.title) : ''}</li>
              ))
            }
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;

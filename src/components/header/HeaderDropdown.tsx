import { useRef, useState, useEffect } from "react";
import Image from "next/image"

import Icongrid from '../../../public/images/icongrid.svg';

const options = [
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
];

const HeaderDropdown = () => {
  const dropdownContainer = useRef<HTMLDivElement>(null);
  const dropdownOptions = useRef<HTMLElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener('click', clickOutsideHandler);
    return () => {
      document.removeEventListener('click', clickOutsideHandler);
    }
  }, []);

  const clickOutsideHandler = (event: Event) => {
    const target = event.target as HTMLButtonElement;
    if (dropdownContainer.current && !dropdownContainer.current.contains(target)) {
      hideDropdownHandler();
    };
  };

  const showDropdownHandler = () => {
    if (!showDropdown) {
      setShowDropdown(true);
    } else hideDropdownHandler();
  };

  const hideDropdownHandler = () => {
    if (dropdownOptions.current) {
      dropdownOptions.current.classList.add('close');
      dropdownOptions.current.addEventListener('animationend', () => setShowDropdown(false));
    }
  };

  return (
    <div ref={dropdownContainer} className="header-dropdown relative">
      <button className="flex items-center font-semibold text-primary uppercase px-5" onClick={showDropdownHandler}>
        <Image src={Icongrid} alt="icongrid" width={20} height={20} className="mr-3"/>
        Categories
      </button>
      {
        showDropdown && (
          <nav ref={dropdownOptions} className="header-dropdown__options absolute w-full bg-white top-8 rounded-md shadow-md py-[15px] px-[18px]">
            <ul className="text-xs font-semibol text-dark">
              {
                options.map((item, i) => (
                  <li key={i} className="pb-[15px] last:pb-0">
                    {item}
                  </li>
                ))
              }
            </ul>
          </nav>
        )
      }
    </div>
  )
}

export default HeaderDropdown
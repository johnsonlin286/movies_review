import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import Iconcaretdown from '../../public/images/iconcaretdown.svg';

type Props = {
  options: string[]
}

const SelectMenu: React.FC<Props> = ({ options }) => {
  const selectElm = useRef<HTMLDivElement>(null);
  const selectOptionsElm = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    document.addEventListener('click', clickOutsideHandler);
    return () => {
      document.removeEventListener('click', clickOutsideHandler);
    }
  }, []);

  const clickOutsideHandler = (event: Event) => {
    const target = event.target as HTMLButtonElement;
    if (selectElm.current && !selectElm.current.contains(target)) {
      hideSelectOpionHandler();
    };
  };

  const updateSelected = (value: string) => {
    setSelected(value);
    hideSelectOpionHandler();
  }

  const hideSelectOpionHandler = () => {
    if (selectOptionsElm.current) {
      selectOptionsElm.current.classList.add('close');
      selectOptionsElm.current.addEventListener('animationend', () => setShow(false));
    }
  }

  return (
    <div ref={selectElm} className="select-menu relative">
      <button className="select-menu__input w-full bg-[#E0E0E021]/[0.13] flex justify-between items-center rounded py-[10px] px-4" onClick={() => setShow(true)}>
        <span className="flex-grow whitespace-nowrap overflow-hidden text-ellipsis text-sm text-left">{selected || 'select one'}</span>
        <Image src={Iconcaretdown} alt="iconcaretdown" width={10} height={10} className={show ? 'rotate-180' : ''}/>
      </button>
      {
        show && (
          <div ref={selectOptionsElm} className="select-menu__options absolute w-full bg-black rounded p-4 mt-[1px] z-[100]">
            <ol>
              {
                options.map((option, i) => (
                  <li key={i} className="text-xs cursor-pointer py-2" onClick={() => updateSelected(option)}>
                    {option}
                  </li>
                ))
              }
            </ol>
          </div>
        )
      }
    </div>
  );
};

export default SelectMenu;
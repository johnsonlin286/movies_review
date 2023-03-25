import { Icon } from '@iconify/react';
import checkSmallRounded from '@iconify/icons-material-symbols/check-small-rounded';
import { useEffect, useState } from 'react';

type Props = {
  id: string,
  label: string,
  checked?: boolean,
  className?: string,
}

const Checkbox: React.FC<Props> = ({ id, label, checked, className }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);

  return (
    <div className={`checkbox relative ${className}`}>
      <label htmlFor={id} className="flex justify-between items-center cursor-pointer">
        <span className="text-sm">{label}</span>
        <span className={`flex justify-start items-center w-[14px] h-[14px] border border-white rounded ${!isChecked ? 'bg-white/50' : 'bg-[#E74C3C]'}`}>
          {
            isChecked && <Icon icon={checkSmallRounded} width={14} color="#FFF"/>
          }
        </span>
      </label>
      <input id={id} type="checkbox" checked={isChecked} className="absolute opacity-0 w-0 h-0 top-0 left-0" onChange={() => setIsChecked(!isChecked)}/>
    </div>
  );
};

Checkbox.defaultProps = {
  checked: false,
  className: ''
}

export default Checkbox;
import { useState } from "react";

import Button from "../Button";

type Filter = 'popular' | 'new'

const HomeFilter = () => {
  const [selected, setSelected] = useState<Filter>('popular');
  
  return (
    <div className="home-filter">
      <Button color={selected === 'popular' ? 'danger' : 'black'} className="mr-5" onClick={() => setSelected('popular')}>Popularity</Button>
      <Button color={selected === 'new' ? 'danger' : 'black'} onClick={() => setSelected('new')}>Release Date</Button>
    </div>
  );
};

export default HomeFilter;
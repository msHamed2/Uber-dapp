import React from "react";
import { useState } from "react";

const style = {
  wrapper: `pt-2`,
};
export const LocationSelector = () => {
    const [inFocus ,setInFocus] = useState('from')
  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>
          {inFocus ==='from' ? 'where can we pick you up ?': 'where to ?'}
          
          </div>
    </div>
  );
};

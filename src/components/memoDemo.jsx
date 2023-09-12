import { useMemo } from 'react';
import { Card } from "./Card"

export const MemoDemo = ({ list, page }) => {
  const sortedList = useMemo(() => {
    console.log('Sorting list');
    return list.sort((a, b) => a - b);
  }, [list]);

  return <>{sortedList.map(({name,status,image,location, url}, index) => <Card key={index} name={name} status={status} image={image} location={location} url={url}/>)}</>

}



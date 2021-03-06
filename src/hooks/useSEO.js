import { useEffect, useRef } from "react";

export const useSEO = ({title}) => {
  const prevTitle = useRef(document.title);

  useEffect(() => {
    const previousTitle = prevTitle.current;    
    document.title = `${title} | Searchphy`;

    return () => document.title = previousTitle;
  }, [title]);
}
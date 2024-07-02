import { classes } from "../data/db";
import { useEffect, useState } from "react";
import { Classes } from "../types/classesTypes";

export const useClasses = () => {
  const [data, setData] = useState<Classes[]>([]);

  useEffect(() => {
    setData(classes);
  }, []);

  return {
    data,
  };
};

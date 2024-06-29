import type { Teacher } from "../types";
import { teachers } from "../data/db";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [data, setData] = useState<Teacher[]>([]);

  useEffect(() => {
    setData(teachers);
  }, []);

  return {
    data,
  };
};

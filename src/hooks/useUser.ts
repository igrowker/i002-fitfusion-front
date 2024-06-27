import type { Teacher } from "../types";
import { db } from "../data/db";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [data, setData] = useState<Teacher[]>([]);

  useEffect(() => {
    setData(db);
  }, []);

  return {
    data,
  };
};

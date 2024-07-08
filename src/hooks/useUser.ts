import { DBclasses, user } from "../data/db";
import { useEffect, useState } from "react";
import { Classes } from "../types/classesTypes";
import { User } from "../types";

export const useUser = () => {
  const [dataClass, setDataClass] = useState<Classes[]>([]);

  const [dataUser, setDataUser] = useState<User[]>([]);

  useEffect(() => {
    setDataClass(DBclasses);
  }, []);

  useEffect(() => {
    setDataUser(user);
  }, []);

  return {
    dataClass,
    dataUser,
  };
};

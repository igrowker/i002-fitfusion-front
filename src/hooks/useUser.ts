import { DBclasses, user, nutritionist } from "../data/db";
import { useEffect, useState } from "react";
import { Classes } from "../types/classesTypes";
import { Nutritionist, User } from "../types/userTypes";

export const useUser = () => {
  const [dataClass, setDataClass] = useState<Classes[]>([]);

  const [dataUser, setDataUser] = useState<User[]>([]);

  const [dataNut, setDataNut] = useState<Nutritionist[]>([]);

  useEffect(() => {
    setDataClass(DBclasses);
  }, []);

  useEffect(() => {
    setDataUser(user);
  }, []);

  useEffect(() => {
    setDataNut(nutritionist);
  }, []);

  return {
    dataClass,
    dataUser,
    dataNut
  };
};

import { DBclasses, user, nutritionist } from "../data/db";
import { useEffect, useState } from "react";
import { Classes } from "../types/classesTypes";
import { NutriAndPhysioType, User } from "../types/userTypes";

export const useUser = () => {
  const [dataClass, setDataClass] = useState<Classes[]>([]);

  const [dataUser, setDataUser] = useState<User[]>([]);

  const [dataNut, setDataNut] = useState<NutriAndPhysioType[]>([]);

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

import { AreaChart, Area, XAxis } from "recharts";
import { PayedClasses } from "../types/classesTypes";
import { useEffect, useState } from "react";

type ChartProps = {
  payedClasses: PayedClasses[] | undefined;
};

export const Chart = ({ payedClasses }: ChartProps) => {
  const [lastFive, setlastFive] = useState<PayedClasses[] | undefined>([]);

  useEffect(() => {
    const getLast5 = payedClasses?.slice(payedClasses.length - 5);

    if (payedClasses !== undefined && payedClasses.length < 5) {
      setlastFive(payedClasses);
    } else {
      setlastFive(getLast5);
    }
  }, [payedClasses]);

  return (
    <AreaChart width={400} height={200} data={lastFive}>
      <XAxis dataKey="none" />

      <Area
        type="monotone"
        dataKey="Class.Calories"
        stroke="#C2BDBD"
        fill="#C1FF72"
        strokeWidth="4"
      />
    </AreaChart>
  );
};

export default Chart;

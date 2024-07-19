import { AreaChart, Area, XAxis } from "recharts";
import { PayedClasses } from "../types/classesTypes";

type ChartProps = {
  payedClasses: PayedClasses[] | undefined;
};

export const Chart = ({ payedClasses }: ChartProps) => {
  const getLast7 = payedClasses?.slice(payedClasses.length - 5);

  console.log(getLast7);

  return (
    <AreaChart width={400} height={200} data={getLast7}>
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

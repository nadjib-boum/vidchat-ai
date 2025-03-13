import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CircleAlert } from "lucide-react";

export type CardItem = {
  title: string;
  description: string;
}

type HowItWorkCardProps = {
  card: CardItem;
  index: number;
} 

const NumberIcon = ({ number }: { number: number; }) => {
  return (
    <div className="border border-2 text-lg border-white h-[40px] w-[40px] rounded-4xl flex justify-center items-center">
      {number}
    </div>
  );
}

const HowItWorkCard = ({ card, index }: HowItWorkCardProps) => {

  return (
    <div
      key={index}
      className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
    >
      <div className="flex flex-col gap-3 items-center text-center">
        <NumberIcon number={index + 1} />
        <div>
          <h4 className="text-xl text-primary mb-1">{card.title}</h4>
          <p className="text-base opacity-75">{card.description}</p>
        </div>
      </div>
    </div>

  );

}

export default HowItWorkCard;
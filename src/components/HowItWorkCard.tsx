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
    <Card className="w-[250px] text-center">
      <CardHeader>
        <CardTitle className="flex flex-col items-center gap-3 mb-1">
          <NumberIcon number={index + 1} />
          {card.title}
        </CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
    </Card>

  );

}

export default HowItWorkCard;
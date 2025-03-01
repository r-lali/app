import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@/components/ui/";
import Image from "next/image";

const Ads = () => {
  return (
    <Card className="w-3/4 flex justify-between items-center">
      <div>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Buy Now</Button>
        </CardFooter>
      </div>
      <Image
        src="/mock/IPHONE.jfif"
        width={300}
        height={200}
        alt="ads"
        priority
        className="rounded-tr-lg rounded-br-lg"
      />
    </Card>
  );
};

export default Ads;

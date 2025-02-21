import * as React from 'react';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@/components/ui/';

import IMG1 from './image/IMG.1.jpg';
import IMG2 from './image/IMG.2.webp';
import IMG3 from './image/IMG.3.jpg';
import IMG4 from './image/IMG.4.jpg';




function Banner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {[IMG1,IMG2,IMG3,IMG4].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-square h-[500px] w-full flex items-center justify-center p-6">
                  <Image
                    src={image}
                    alt="banner"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default Banner;

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

import IMG1 from './image/0x0.webp';

function Banner() {
  return (
    <Carousel className="w-full object-cover">
      <CarouselContent>
        {[IMG1].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-square w-full h-[500px] flex items-center justify-center p-6">
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

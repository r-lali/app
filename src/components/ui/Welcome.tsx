import { MonitorSmartphone } from 'lucide-react';
import React from 'react';
import { Button } from './button';
import Link from 'next/link';

function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <span>Welcome to</span>
      <div className="flex items-center gap-3">
        <MonitorSmartphone />
        <h1 className="text-2xl font-bold text-gray-800">Shopapp</h1>
      </div>
      <Button asChild className="mt-6">
        <Link href="./products">Go to product</Link>
      </Button>
    </div>
  );
}

export default Welcome;

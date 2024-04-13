'use client';

import { Blocks } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <Blocks />
    </div>
  );
}

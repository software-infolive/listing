import { Suspense } from 'react';
import ListingsContent from './ListingsContent';

export default function Listings() {
  return (
    <Suspense 
      key="listings-content"
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-rose-600"></div>
        </div>
      }
    >
      <ListingsContent />
    </Suspense>
  );
}
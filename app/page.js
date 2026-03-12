'use client';
import { useEffect, useState } from 'react';
import CouponCard from '../components/CouponCard.js';

export default function Home() {
  const [coupons, setCoupons] = useState([]);
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // 1. Track Visit
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/stats/hit`, { method: 'POST' })
      .then(res => res.json())
      .then(data => setVisits(data.count));

    // 2. Fetch Coupons
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/coupons`)
      .then(res => res.json())
      .then(data => setCoupons(data));
  }, []);

  const removeCouponFromList = (id) => {
    setCoupons(prev => prev.filter(c => c._id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            🎁 Unused G-Pay Rewards
          </h1>
          <p className="text-gray-600">Free codes from my scratch cards. First come, first served!</p>
          <div className="mt-4 text-sm font-medium text-blue-600 bg-blue-50 inline-block px-4 py-1 rounded-full">
             👀 {visits} total people helped
          </div>
        </header>

        {coupons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coupons.map(coupon => (
              <CouponCard 
                key={coupon._id} 
                coupon={coupon} 
                onClaimed={removeCouponFromList} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-inner">
            <p className="text-gray-400 text-lg">No rewards available right now. Check back soon! ☕</p>
          </div>
        )}
      </div>
    </main>
  );
}
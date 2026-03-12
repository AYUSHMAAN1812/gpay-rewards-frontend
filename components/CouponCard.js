'use client';
import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CouponCard({ coupon, onClaimed }) {
  const [copied, setCopied] = useState(false);

  const handleClaim = async () => {
    try {
      // 1. Copy to clipboard
      await navigator.clipboard.writeText(coupon.code);
      setCopied(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

      // 2. Tell backend to mark as used
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/coupons/claim/${coupon._id}`, {
        method: 'PATCH',
      });

      // 3. Remove from UI after a short delay
      setTimeout(() => {
        onClaimed(coupon._id);
      }, 2000);
    } catch (err) {
      console.error("Failed to claim:", err);
    }
  };

  return (
    <div className="border rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{coupon.brand}</h3>
          <p className="text-sm text-gray-500">{coupon.details}</p>
        </div>
        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
          Active
        </span>
      </div>
      
      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-dashed border-gray-300">
        <code className="flex-1 font-mono font-bold text-blue-600">
          {copied ? "COPIED!" : "••••••••"}
        </code>
        <button 
          onClick={handleClaim}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            copied ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? 'Claimed' : 'Reveal & Copy'}
        </button>
      </div>
      <p className="text-[10px] text-gray-400 mt-3 italic">
        Expires: {new Date(coupon.expiryDate).toLocaleDateString()}
      </p>
    </div>
  );
}
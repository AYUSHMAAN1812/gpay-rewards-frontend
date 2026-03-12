'use client';
import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

export default function CouponCard({ coupon, onClaimed }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{coupon.brand}</h3>
          <p className="text-sm text-gray-500">{coupon.details}</p>
        </div>
        <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-bold uppercase">
          New
        </div>
      </div>
      
      <div className="relative mt-4">
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 p-4 rounded-xl font-mono text-center text-lg font-bold text-blue-600">
          {coupon.code}
        </div>
        <button 
          onClick={copyToClipboard}
          className="absolute right-2 top-2 p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-400" />}
        </button>
      </div>

      <div className="mt-6 flex gap-3">
        <button 
          onClick={() => onClaimed(coupon._id)}
          className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-black transition-colors"
        >
          Mark as Used
        </button>
      </div>
    </div>
  );
}
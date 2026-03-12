'use client';
import { useState } from 'react';
import { PlusCircle, Key, Tag, Calendar, Info } from 'lucide-react';

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    brand: '',
    code: '',
    details: '',
    expiryDate: '',
    password: '' // Your secret password set in the server's .env
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Adding reward...' });

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/coupons/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': formData.password 
        },
        body: JSON.stringify({
          brand: formData.brand,
          code: formData.code,
          details: formData.details,
          expiryDate: formData.expiryDate
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: '✅ Reward added to the live site!' });
        // Reset form but keep the password for the next entry
        setFormData({ brand: '', code: '', details: '', expiryDate: '', password: formData.password });
      } else {
        setStatus({ type: 'error', message: `❌ ${data.message || 'Failed to add coupon'}` });
      }
    } catch (err) {
      setStatus({ type: 'error', message: '❌ Could not connect to the server.' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md border border-slate-100">
        <div className="text-center mb-8">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <PlusCircle className="text-blue-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Reward Manager</h1>
          <p className="text-slate-500 text-sm">Add a new scratch card to the public list</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Secret Password Field */}
          <div className="relative">
            <Key className="absolute left-3 top-3 text-slate-400" size={20} />
            <input 
              type="password" placeholder="Admin Secret Password" required
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <hr className="border-slate-100 my-2" />

          {/* Brand Name */}
          <div className="relative">
            <Tag className="absolute left-3 top-3 text-slate-400" size={20} />
            <input 
              type="text" placeholder="Brand (e.g., Zomato, Swiggy)" required
              className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500"
              value={formData.brand}
              onChange={(e) => setFormData({...formData, brand: e.target.value})}
            />
          </div>

          {/* Coupon Code */}
          <div className="relative">
            <span className="absolute left-3 top-3 font-bold text-slate-400">#</span>
            <input 
              type="text" placeholder="Coupon Code" required
              className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl font-mono uppercase text-blue-700"
              value={formData.code}
              onChange={(e) => setFormData({...formData, code: e.target.value})}
            />
          </div>

          {/* Details */}
          <div className="relative">
            <Info className="absolute left-3 top-3 text-slate-400" size={20} />
            <textarea 
              placeholder="Offer details (e.g., 50% off on first order)"
              className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl h-24 outline-none focus:border-blue-500"
              value={formData.details}
              onChange={(e) => setFormData({...formData, details: e.target.value})}
            />
          </div>

          {/* Expiry Date */}
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-slate-400" size={20} />
            <input 
              type="date" required
              className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-600"
              value={formData.expiryDate}
              onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            Publish to Website
          </button>
        </form>

        {status.message && (
          <div className={`mt-6 p-4 rounded-xl text-center text-sm font-medium ${
            status.type === 'success' ? 'bg-green-50 text-green-700' : 
            status.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'
          }`}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
}
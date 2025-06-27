import React from 'react';
import { useLocation } from 'react-router-dom';
import packagesData from './data/packages.json';

const CartPage = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const selectedId = searchParams.get('item');
  const pkg = Object.values(packagesData)
    .flat()
    .find((p) => p.id === selectedId);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {pkg ? (
        <div className="bg-gray-800 p-4 rounded-xl mb-4">
          <h2 className="text-lg">{pkg.title}</h2>
          <p className="text-sm">₹{pkg.price}</p>
        </div>
      ) : (
        <p>No items in cart.</p>
      )}

      {pkg && (
        <button
          onClick={() => alert('Payment simulated! 🎉')}
          className="bg-green-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Pay ₹{pkg.price}
        </button>
      )}
    </div>
  );
};

export default CartPage;
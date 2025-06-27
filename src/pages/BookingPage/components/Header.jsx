import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import instituteData from '../data/institute.json';
import { ShoppingCart, Star, Users, Award, Phone } from 'lucide-react';

const Header = () => {
  const { instituteName } = useParams();
  const [institute, setInstitute] = useState(null);

  useEffect(() => {
    setInstitute(instituteData[instituteName]);
  }, [instituteName]);

  if (!institute) return null;

  return (
    <header className="w-full bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Institute Branding */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={institute.logo}
                alt="logo"
                className="h-12 w-12 rounded-xl shadow-md object-cover ring-2 ring-blue-100"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                {institute.name}
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <p className="text-sm text-blue-600 font-medium">Official Booking Page</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-400">•</span>
                  <Users className="w-3 h-3" />
                  <span>50K+ Students</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators & Actions */}
          <div className="flex items-center gap-6">
            {/* Trust Badges */}
            <div className="hidden md:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full">
                <Award className="w-4 h-4" />
                <span className="font-medium">Verified Institute</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Cart Button */}
            <Link
              to={`/in/${instituteName}/cart`}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">View Cart</span>
            </Link>
          </div>
        </div>

    
      </div>
    </header>
  );
};

export default Header;
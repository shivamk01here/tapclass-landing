import { Quote, Star } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4 backdrop-blur-sm">
            💬 Why Coaching Owners Love Us
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8 pt-12">
              "Now I don't need 4 different apps. TapClass handles everything from fees to test updates — all on mobile. It's like having a virtual manager."
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div className="w-16 h-16 bg-gray-400 rounded-full mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
              </div>
              
              {/* Name and Title */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-1">Aakash Sir</h4>
                <p className="text-gray-300 mb-4">Director, Galaxy Institute</p>
                
                {/* Stars */}
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-400">5.0 out of 5 stars</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">2.5K+</div>
            <div className="text-gray-300">Students Managed</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">₹1Cr+</div>
            <div className="text-gray-300">Payments Processed</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Academies Onboarded</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
import { MapPin } from 'lucide-react';

export default function SourcingNetwork() {
  const sourcingLocations = [
    {
      city: 'Nashik',
      products: ['grapes'],
      position: 'top-[25%] left-[45%]'
    },
    {
      city: 'Guntur',
      products: ['chillies'],
      position: 'top-[40%] left-[35%]'
    },
    {
      city: 'Pollachi',
      products: ['coconut', 'coco peat'],
      position: 'top-[35%] left-[60%]'
    },
    {
      city: 'Nilgiris',
      products: ['tea'],
      position: 'top-[50%] left-[30%]'
    },
    {
      city: 'Chikmagalur',
      products: ['coffee'],
      position: 'top-[55%] left-[65%]'
    },
    {
      city: 'Namakkal',
      products: ['eggs'],
      position: 'top-[65%] left-[40%]'
    },
    {
      city: 'Tiruppur',
      products: ['garments'],
      position: 'top-[70%] left-[55%]'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-600">
            Strong Sourcing Network Across India
          </h2>
        </div>

        <div className="relative bg-gray-50 rounded-lg p-8">
          {/* India Map Container */}
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Simple India Map Shape */}
            <svg viewBox="0 0 400 500" className="w-full h-full max-w-2xl">
              <path
                d="M200 50 L250 100 L280 150 L270 200 L250 250 L220 300 L200 350 L180 400 L150 420 L120 380 L140 300 L180 200 L200 150 Z"
                fill="#f3f4f6"
                stroke="#d1d5db"
                strokeWidth="2"
              />
            </svg>

            {/* Location Markers */}
            {sourcingLocations.map((location, index) => (
              <div
                key={index}
                className={`absolute ${location.position} transform -translate-x-1/2 -translate-y-1/2`}
              >
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <div className="mt-1 text-center">
                    <div className="font-semibold text-gray-800 text-sm">
                      {location.city}
                    </div>
                    <div className="text-xs text-gray-600">
                      {location.products.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

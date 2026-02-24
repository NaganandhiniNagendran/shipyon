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

        <div className="bg-gray-50 rounded-lg p-8">
          <img
            src="/strong-sourcing-network-india.png"
            alt="Strong Sourcing Network Across India"
            className="w-full h-auto max-w-full rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

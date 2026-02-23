import { Handshake, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Subtle world map texture background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 C60 10, 70 20, 70 30 C70 40, 60 50, 50 50 C40 50, 30 40, 30 30 C30 20, 40 10, 50 10 Z' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Left side - Image layout */}
          <div className="relative h-[500px]">
            {/* Top wide image - Farmers */}
            <div className="absolute top-0 left-0 right-0 h-48 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269f6?auto=format&fit=crop&w=800&q=80"
                alt="Smiling farmers in agricultural field"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle circular overlay - Warehouse */}
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white z-10">
              <img
                src="https://images.unsplash.com/photo-1564300218623-95a9c9707625?auto=format&fit=crop&w=400&q=80"
                alt="Modern warehouse interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom wide image - Cargo Ship */}
            <div className="absolute bottom-0 left-0 right-0 h-48 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
                alt="Large cargo ship with containers"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-md shadow-md">
                <span className="text-sm font-bold text-gray-800">SHIPYON</span>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-4xl font-serif text-green-700 mb-2">Who We Are?</h2>
            </div>

            {/* Bold headline */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Connecting <span className="text-green-600">Producers</span> to <span className="text-green-600">Markets.</span>
              </h1>
            </div>

            {/* Description paragraph */}
            <div className="text-lg text-gray-700 leading-relaxed">
              <p>
                We are a premier sourcing and trade company serving both domestic and international markets. 
                Our focus on quality, transparency, and dependable supply chains ensures that producers connect 
                efficiently with global markets, creating lasting partnerships built on trust and excellence.
              </p>
            </div>

            {/* Feature cards */}
            <div className="space-y-4">
              {/* Trusted Supplier Network */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Handshake className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Supplier Network</h3>
                    <p className="text-gray-600">Building reliable relationships with verified producers and manufacturers worldwide.</p>
                  </div>
                </div>
              </div>

              {/* Domestic & Global Trade */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Domestic & Global Trade</h3>
                    <p className="text-gray-600">Facilitating seamless trade across local and international markets with expertise.</p>
                  </div>
                </div>
              </div>

              {/* Quality-Driven Operations */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality-Driven Operations</h3>
                    <p className="text-gray-600">Maintaining highest standards in quality control and operational excellence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
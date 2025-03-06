'use client'

import React from 'react'

export default function VisitorDashboard() {
  // Mock data for demonstration
  const featuredArt = [
    { id: 1, title: "Mountain Sunrise", artist: "Emma Wilson", price: "$1,800", category: "Painting" },
    { id: 2, title: "Steel Dreams", artist: "Michael Chen", price: "$2,500", category: "Sculpture" },
    { id: 3, title: "Digital Waves", artist: "Sarah Johnson", price: "$950", category: "Digital Art" }
  ]

  const upcomingTours = [
    { id: 1, name: "Historic District Art Walk", date: "Mar 15, 2024", duration: "2 hours", spots: 8 },
    { id: 2, name: "Modern Gallery Tour", date: "Mar 18, 2024", duration: "1.5 hours", spots: 12 },
    { id: 3, name: "Studio Visits", date: "Mar 20, 2024", duration: "3 hours", spots: 6 }
  ]

  const investmentOpportunities = [
    { id: 1, artwork: "Urban Light", minInvestment: "$500", expectedReturn: "12-15%", deadline: "5 days" },
    { id: 2, artwork: "Nature's Harmony", minInvestment: "$750", expectedReturn: "8-10%", deadline: "3 days" },
    { id: 3, artwork: "Tech Future", minInvestment: "$1,000", expectedReturn: "15-18%", deadline: "7 days" }
  ]

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Visitor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Art Discovery */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Featured Artworks</h2>
          <div className="space-y-4">
            {featuredArt.map((art) => (
              <div key={art.id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{art.title}</h3>
                    <p className="text-sm text-gray-600">by {art.artist}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-indigo-600 font-semibold">{art.price}</span>
                    <p className="text-sm text-gray-500">{art.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Explore More Art
          </button>
        </div>

        {/* Tour Planning */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Available Tours</h2>
          <div className="space-y-4">
            {upcomingTours.map((tour) => (
              <div key={tour.id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{tour.name}</h3>
                    <p className="text-sm text-gray-600">{tour.date} • {tour.duration}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                      {tour.spots} spots left
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Book a Tour
          </button>
        </div>

        {/* Investment Opportunities */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Investment Opportunities</h2>
          <div className="space-y-4">
            {investmentOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{opportunity.artwork}</h3>
                    <p className="text-sm text-gray-600">Min: {opportunity.minInvestment}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-green-600 font-semibold">{opportunity.expectedReturn}</span>
                    <p className="text-sm text-gray-500">Ends in {opportunity.deadline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            View All Opportunities
          </button>
        </div>

        {/* Purchase Guide */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Purchase Guide</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium mb-2">How to Buy Art</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Browse our curated collection</li>
                <li>Contact the artist or gallery</li>
                <li>Arrange viewing or purchase</li>
                <li>Secure payment through our platform</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium mb-2">Benefits</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Verified authentic artworks</li>
                <li>Secure transactions</li>
                <li>Direct artist communication</li>
                <li>Shipping insurance included</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
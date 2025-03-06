'use client'

import React from 'react'

export default function ResidentDashboard() {
  // Mock data for demonstration
  const portfolio = [
    { id: 1, artwork: "Sunset Valley", artist: "Jane Doe", investment: "$2,500", appreciation: "+15%" },
    { id: 2, artwork: "Urban Dreams", artist: "John Smith", investment: "$3,800", appreciation: "+8%" },
    { id: 3, artwork: "Nature's Call", artist: "Alice Brown", investment: "$1,900", appreciation: "+22%" }
  ]

  const proposals = [
    { id: 1, title: "New Art Gallery Opening", votes: 156, status: "Active" },
    { id: 2, title: "Public Art Installation", votes: 89, status: "Active" },
    { id: 3, title: "Art Education Program", votes: 234, status: "Closed" }
  ]

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Resident Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Investment Portfolio */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Investment Portfolio</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Artwork</th>
                  <th className="text-left py-2">Artist</th>
                  <th className="text-left py-2">Investment</th>
                  <th className="text-left py-2">Appreciation</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.artwork}</td>
                    <td className="py-2">{item.artist}</td>
                    <td className="py-2">{item.investment}</td>
                    <td className="py-2 text-green-600">{item.appreciation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Local Art Map */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Local Art Map</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-600">Interactive map showing local art installations and galleries</p>
            {/* Placeholder for map component */}
            <div className="h-48 bg-gray-200 rounded mt-2 flex items-center justify-center">
              <span className="text-gray-500">Map View</span>
            </div>
          </div>
        </div>

        {/* Voting Rights */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Voting Rights</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Available Votes</span>
              <span className="font-semibold">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Voting Power Level</span>
              <span className="text-indigo-600 font-semibold">Silver</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              Cast Vote
            </button>
          </div>
        </div>

        {/* Community Proposals */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Community Proposals</h2>
          <div className="space-y-4">
            {proposals.map((proposal) => (
              <div key={proposal.id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{proposal.title}</h3>
                  <span className={`px-2 py-1 rounded text-sm ${
                    proposal.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {proposal.status}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Votes: {proposal.votes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
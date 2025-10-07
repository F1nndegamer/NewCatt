import React from "react";
import './Tribes.css';
export default function TribesSection() {
  return (
    <section id="tribes" className="tribes">
      <h2 className="text-3xl font-bold mb-6">Tribes</h2>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Demo</h3>
        <p className="text-gray-400">...</p>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">History of Tribes</h3>
        <p className="text-gray-400">...</p>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Future / Goals</h3>
        <p className="text-gray-400">...</p>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Steam Mention</h3>
        <a href="#" className="text-blue-400 hover:underline">...</a>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Trailer</h3>
        <div className="aspect-video bg-gray-700 rounded-lg">...</div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2">Screenshots</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="w-full h-40 bg-gray-700 rounded-lg">...</div>
        </div>
      </div>
    </section>
  );
}

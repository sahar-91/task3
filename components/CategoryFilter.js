"use client";


export default function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div className="container mx-auto px-4 py-6 text-center">
      <label className="mr-2 font-medium text-gray-700">Filter by category:</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-1 border rounded-lg"
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}
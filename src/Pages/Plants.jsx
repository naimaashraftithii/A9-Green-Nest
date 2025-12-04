import React, { useEffect, useMemo, useState } from "react";
import PlantCard from "../components/PlantCard";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [sortField, setSortField] = useState("price"); 
  const [sortOrder, setSortOrder] = useState("asc");  
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    fetch("/plantsdata.json")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  // unique categories 
  const categories = useMemo(() => {
    const set = new Set(plants.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [plants]);


  const visiblePlants = useMemo(() => {
    let data = [...plants];

    // filtering
    if (categoryFilter !== "All") {
      data = data.filter((p) => p.category === categoryFilter);
    }

    // sorting
    data.sort((a, b) => {
      let A = a[sortField];
      let B = b[sortField];

      if (typeof A === "string") {
        A = A.toLowerCase();
        B = B.toLowerCase();
        if (A < B) return sortOrder === "asc" ? -1 : 1;
        if (A > B) return sortOrder === "asc" ? 1 : -1;
        return 0;
      } else {
        return sortOrder === "asc" ? A - B : B - A;
      }
    });

    return data;
  }, [plants, sortField, sortOrder, categoryFilter]);

  return (
    <div className="container mx-auto px-3 md:px-4 py-10">
      {/* top */}
      <div className="text-center pb-6">
        <p className="text-xl text-green-600 font-bold font-sans">
          THE BEST PRODUCTS
        </p>
        <h1 className="text-3xl md:text-5xl text-gray-700 font-bold mb-4">
          Discovery Category
        </h1>
        <p className="text-sm md:text-base text-gray-700 font-serif max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-7">
          We ship healthy potted plants right to your doorstep. Each plant comes
          with simple care instructions, a money back guarantee, and direct
          access to our plant experts to answer questions. Our goal is to make
          the experience of being a plant parent as wonderful as plants
          themselves.
        </p>
        <button
          className="btn btn-soft btn-success font-semibold text-gray-900 border-0 bg-emerald-300
         hover:bg-orange-300 hover:text-2xl"
        >
          Learn More{" "}
          <span className="font-extrabold text-4xl text-center"> → </span>
        </button>
      </div>

    
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Category chips  */}
        <div>
          <p className="text-xs text-gray-500 mb-2">
            {/* Suggestion / */}
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1 rounded-full text-xs md:text-sm border transition-colors
                  ${
                    categoryFilter === cat
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
                  }`}
              >
                {cat === "All" ? "All Categories" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* sort controls */}
        <div className="flex flex-wrap items-center gap-3 justify-between md:justify-end">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              className="select select-sm select-bordered text-sm"
            >
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="plantName">Name</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() =>
              setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
            className="btn btn-sm border-gray-300 bg-white hover:bg-green-50"
          >
            {sortOrder === "asc" ? "Ascending ↑" : "Descending ↓"}
          </button>
        </div>
      </div>

      {/* Grid of Plants  */}
      {visiblePlants.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No plants found for this filter.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visiblePlants.map((p) => (
            <PlantCard key={p.plantId} p={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Plants;

"use client";
import { useEffect, useState } from "react";
import { getCities } from "../../../services/filterServices";
import css from "./City.module.css";
import { CityType } from "../../../types/camper";

export default function City() {
  const [cities, setCities] = useState<CityType[]>([]);

  useEffect(() => {
    const load = async () => {
      const cities = await getCities();
      setCities(cities);
      console.log("CITIES RESULT:", cities);
    };
    load();
  }, []);
  return (
   <div className={css.input}>
      <label className="text-gray-500 font-medium text-sm">Location</label>
      
      <div className="relative">
        {/* Иконка (опционально, если есть Lucide или Heroicons) */}
        <input 
          type="text" 
          name="location"
          list="cities" 
          placeholder="City, Country"
          className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-red-400 transition-all pl-12"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📍</span>
      </div>

      <datalist id="cities">
        {cities.map((city) => (
          <option key={city} value={city} />
        ))}
      </datalist>
    </div>
  );
}

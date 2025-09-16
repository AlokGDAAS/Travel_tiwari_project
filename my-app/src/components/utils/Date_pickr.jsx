import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css"; // pick a theme

export default function DateRangePicker() {
  const [range, setRange] = useState([]);

  return (
    <div className="p-4">
      <Flatpickr
        options={{ mode: "range", dateFormat: "Y-m-d" }}
        value={range}
        onChange={(selectedDates) => setRange(selectedDates)}
        className="border p-2 rounded"
        placeholder="📅 Select date range"
      />

      {range.length === 2 && (
        <p className="mt-3">
          {range[0].toLocaleDateString()} → {range[1].toLocaleDateString()}
        </p>
      )}
    </div>
  );
}

"'use client'";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { slot: 1, accuracy: 85 },
  { slot: 2, accuracy: 45 },
  { slot: 3, accuracy: 35 },
  { slot: 4, accuracy: 65 },
  { slot: 5, accuracy: 55 },
  { slot: 6, accuracy: 45 },
  { slot: 7, accuracy: 65 },
];

const timeMarkers = [
  { min: 10, label: "'10MIN'" },
  { min: 15, label: "'15MIN'", isSelected: true },
  { min: 30, label: "'30MIN'" },
  { min: 45, label: "'45MIN'" },
];

export function AccuracyChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16l4-4m0 0l4 4m-4-4V4"
            />
          </svg>
          <span>Compare Accuracy</span>
        </CardTitle>

        {/* Time Markers with Green Background */}
        <div className="relative mt-2 px-4">
          <div className="absolute rounded-sm top-1/2 left-0 w-full h-2 bg-teal-100 -translate-y-1/2"></div>
          <div className="relative z-10 flex justify-between">
            {timeMarkers.map((marker) => (
              <div
                key={marker.min}
                className={`px-3 py-1 text-xs rounded cursor-pointer ${
                  marker.isSelected
                    ? "'bg-teal-500 text-white'"
                    : "'bg-gray-100 text-gray-600'"
                }`}
              >
                {marker.label}
              </div>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Chart with Axis Labels */}
        <div className="h-[250px] mt-4 relative w-full">
          <span className="absolute top-1/2 -left-6 -translate-y-[80px] rotate-[-90deg] text-xs sm:text-sm text-gray-500">
            Accuracy
          </span>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3" vertical={false} />
              <XAxis dataKey="slot" />
              <YAxis
                ticks={[0, 25, 50, 75, 100]}
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="accuracy" fill="#818cf8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <span className="absolute bottom-0 left-1/2 translate-y-6 -translate-x-1/2 text-xs sm:text-sm text-gray-500">
            Slots
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

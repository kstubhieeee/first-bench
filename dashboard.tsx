import { Nav } from "./nav"
import { ResultsCard } from "./results-card"
import { PerformanceMetrics } from "./performance-metrics"
import { Suggestions } from "./suggestions"
import { AccuracyChart } from "./accuracy-chart"
import { TimeTaken } from "./time-taken"
import { RevisitPaper } from "./revisit-paper"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card" // Fixed import path
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [profileImage, setProfileImage] = useState("/placeholder.svg");

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results[0] && data.results[0].picture) {
          setProfileImage(data.results[0].picture.medium);
        }
      })
      .catch(error => console.error('Error fetching random user:', error));
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav profileImage={profileImage} />
      <main className="container mx-auto py-6 px-4">
  <div className="flex flex-col lg:flex-row gap-6">
    {/* Left section */}
    <div className="w-full lg:w-[350px] space-y-6">
      <ResultsCard profileImage={profileImage} />
      <div className="mt-4">
        <RevisitPaper />
      </div>
      
    </div>
    {/* Right section */}
    <div className="flex-1 flex flex-col gap-6">
      {/* Top row - Compare Accuracy cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[142px]">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="col-span-1">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Compare Accuracy</CardTitle>
            </CardHeader>
            <CardContent className="h-full" />
          </Card>
        ))}
      </div>

      {/* Middle row - Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1">
          <PerformanceMetrics />
        </div>
        <div className="col-span-1">
          <Card className="h-full">
  <CardHeader>
    <CardTitle className="text-sm font-medium flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Response Time
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="bg-indigo-100 text-indigo-600 rounded-md px-3 py-1 text-sm inline-block">
        Std Time - 2min
      </div>
      <div className="border-2 border-dashed border-gray-200 rounded-lg p-3">
        <span className="text-3xl font-semibold text-teal-500">60</span>
        <span className="text-3xl font-semibold text-teal-500">%</span>
        <span className="text-gray-500 text-sm ml-2">Ans took</span>
        <span className="text-blue-600 text-lg font-medium ml-2">
          <span className="text-red-500 text-xl">↑</span> 2min
        </span>
      </div>
      <div className="text-lg font-medium">
        You are <span className="text-red-500">slow</span>!
      </div>
    </div>
  </CardContent>
</Card>
        </div>
        <div className="col-span-1">
          <Card className="h-full">
  <CardHeader>
    <CardTitle className="text-sm font-medium flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Approach Data
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      {[
        { percent: 25, type: 'Facts' },
        { percent: 32, type: 'Analysis' },
        { percent: 19, type: 'Elimination' },
        { percent: 24, type: 'Guess' }
      ].map((item) => (
        <div 
          key={item.type}
          className="flex items-center p-3 bg-[#F3F6FF] rounded-lg"
        >
          <span className="text-lg font-semibold text-gray-700 mr-2">
            {item.percent}%
          </span>
          <span className="text-gray-600">Based on</span>
          <span className="text-indigo-500 ml-2 font-medium">
            {item.type}
          </span>
        </div>
      ))}
    </div>
  </CardContent>
</Card>
        </div>
        <div className="col-span-1">
          <Suggestions />
        </div>
      </div>

      {/* Bottom row - Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AccuracyChart />
        <TimeTaken />
      </div>
    </div>
  </div>
</main>
    </div>
  )
}


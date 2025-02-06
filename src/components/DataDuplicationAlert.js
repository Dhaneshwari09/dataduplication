import React from "react";
import { Card, CardContent } from "../components/ui/Card";  // ✅ Corrected Path
import { Button } from "../components/ui/Button";           // ✅ Corrected Path
import { Menu } from "lucide-react";

export default function DataDuplicationAlert() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-6">
        <Menu className="w-6 h-6 text-white cursor-pointer" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
        Data Duplication Alert System
      </h1>

      {/* Top Section: Two Cards Side by Side */}
      <div className="flex flex-wrap justify-between gap-6 max-w-4xl mx-auto mb-8">
        {/* First Card */}
        <Card className="bg-gray-800 p-4 rounded-2xl flex-1 max-w-[48%]">
          <CardContent className="flex flex-col items-center text-center">
            <img
              src="/DataDuplicationicon.png"
              alt="Similarity Check"
              className="w-40 h-40 mb-4"
            />
            <p>A personalized dashboard which provides real-time updates</p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600">Dashboard</Button>
          </CardContent>
        </Card>

        {/* Second Card */}
        <Card className="bg-gray-800 p-4 rounded-2xl flex-1 max-w-[48%]">
          <CardContent className="flex flex-col items-center text-center">
            <img
              src="/DataDuplicationicon.png"
              alt="Dashboard"
              className="w-40 h-40 mb-4"
            />
            <p>Check for data similarity with advanced algorithms</p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600">Similarity Check</Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section: One Card Below */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gray-800 p-4 rounded-2xl flex flex-col items-center text-center">
          <img
            src="/chrome-extension.png"
            alt="Chrome Extension"
            className="w-32 h-32 mb-4"
          />
          <div>
            <p>
              Download the Chrome extension of our app now, to protect your
              system from duplicate downloads.
            </p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600">Chrome Extension</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

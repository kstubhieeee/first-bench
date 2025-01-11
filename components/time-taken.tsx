import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function TimeTaken() {
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
              d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12a9 9 0 11-18 0118 0z"
            />
          </svg>
          <span>Time Taken</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* First Timeline */}
          <div>
            <div className="relative">
              <div className="bg-[#F3F4F9] h-16 sm:h-20 w-full rounded relative flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PO5OiDcHwao1L6whNgsrYI51MTL58h.png"
                  alt="Time scale from 10 to 90 seconds"
                  className="w-full h-full object-contain"
                />
                <div className="absolute left-[20%] top-[55%] h-2 w-[40%] bg-red-500 rounded-sm" />
                <div className="absolute left-[20%] top-[70%] h-2 w-[27%] bg-green-500 rounded-sm" />
                <div className="absolute left-[30%] h-full w-[2%] bg-indigo-500 opacity-20 rounded-sm" />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </p>
          </div>

          {/* Second Timeline */}
          <div>
            <div className="relative">
              <div className="bg-[#F3F4F9] h-16 sm:h-20 w-full rounded relative flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PO5OiDcHwao1L6whNgsrYI51MTL58h.png"
                  alt="Time scale from 4 to 0 seconds"
                  className="w-full h-full object-contain"
                />
                <div className="absolute left-[30%] top-[55%] h-2 w-[20%] bg-red-500 rounded-sm" />
                <div className="absolute left-[52%] top-[55%] h-2 w-[30%] bg-green-500 rounded-sm" />
                <div className="absolute left-[50%] h-full w-[2%] bg-indigo-500 opacity-20 rounded-sm" />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

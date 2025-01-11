import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from 'lucide-react'

export function Suggestions() {
  const timeRanges = [
    { range: "Q. 1-12", time: "40sec", difficulty: "Easy" },
    { range: "Q. 12-32", time: "1.5min", difficulty: "Medium" },
    { range: "Q. 32-40", time: "3min", difficulty: "Hard" }
  ]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-gray-400" />
          Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-6">
          {timeRanges.map((item) => (
            <Badge 
              key={item.range} 
              className="bg-indigo-600 hover:bg-indigo-700 text-white border-none"
            >
              {item.range}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          {timeRanges.map((item) => (
            <div 
              key={item.time} 
              className="flex-1 min-w-[80px] p-3 border-2 border-dashed border-gray-200 rounded-lg text-center"
            >
              <div className="text-base font-medium">{item.time}</div>
              <div className={`text-sm ${
                item.difficulty === 'Easy' ? 'text-emerald-500' :
                item.difficulty === 'Medium' ? 'text-amber-500' :
                'text-red-500'
              }`}>
                {item.difficulty}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


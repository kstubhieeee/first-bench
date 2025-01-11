import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const subjects = [
  { name: "Geography", color: "bg-emerald-100 text-emerald-800" },
  { name: "Politics", color: "bg-yellow-100 text-yellow-800" },
  { name: "Current Affairs", color: "bg-teal-100 text-teal-800" },
  { name: "General Studies", color: "bg-gray-100 text-gray-800" },
  { name: "Mathematics", color: "bg-blue-100 text-blue-800" },
  { name: "English Literature", color: "bg-red-100 text-red-800" },
  { name: "Indian History", color: "bg-orange-100 text-orange-800" },
  { name: "Economics", color: "bg-cyan-100 text-cyan-800" },
]

export function PerformanceMetrics() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Improvements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject) => (
            <Badge key={subject.name} variant="secondary" className={`${subject.color} mb-2`}>
              {subject.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


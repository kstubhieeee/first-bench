import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Info } from 'lucide-react'

export function RevisitPaper() {
  return (
    <Card>
      <CardContent className="p-7">
        <h3 className="text-xl font-bold mb-2">Revisit Paper</h3>
        <p className="text-gray-600 mb-4">
          Challenge your friends by simply sharing a link to this test
        </p>
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 mb-4">
          Visit
        </Button>
        <div className="flex items-start gap-2 text-sm text-gray-500">
          <Info className="w-4 h-4 mt-0.5" />
          <p>Instructions for how to upload your handwritten material is given</p>
        </div>
      </CardContent>
    </Card>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ResultsCard({ profileImage }: { profileImage: string }) {
  return (
    <Card className="w-full max-w-md mx-auto bg-gray-50">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TOvLx25Qng4bmyYCmRFwARkM8vFOm5.png"
            alt="Results illustration showing a completed checklist and person with pencil"
            className="w-32 sm:w-48 mb-4"
          />
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Your Result!</h2>
          <p className="text-gray-600">All your insights & details in one place</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
              YOU'VE PASSED!
            </Badge>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl font-bold">136<span className="text-gray-400 text-lg">/240</span></div>
            <Badge variant="secondary" className="bg-teal-100 text-teal-800">
              76% ACCURACY
            </Badge>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-8 h-8">
          <AvatarImage src={profileImage} alt="Profile" />
          <AvatarFallback>RU</AvatarFallback>
        </Avatar>
                <div className="text-left">
                  <div className="text-sm text-gray-500">Top Score</div>
                  <div className="font-semibold">230<span className="text-gray-400 text-sm">/240</span></div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                92% ACCURACY
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">Improve your Marks</h3>
            <p className="text-sm text-gray-600">Improve your score by practicing more.</p>
          </div>
          <Button className="w-full mb-8 bg-indigo-600 hover:bg-indigo-700">Practice more</Button>
        </div>
      </CardContent>
    </Card>
  )
}


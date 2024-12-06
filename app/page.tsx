import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import TokenPriceChart from "@/components/TokenPriceChart"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Tokens Created</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Successful Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">5,678</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Current Token Price</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$0.0123</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Token Creation Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={33} className="w-full" />
          <p className="mt-2 text-sm text-muted-foreground">33% Complete</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Token Price History</CardTitle>
        </CardHeader>
        <CardContent>
          <TokenPriceChart />
        </CardContent>
      </Card>
    </div>
  )
}


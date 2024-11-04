import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const chartData = [
  {
    time: 0,
    temperature: 0,
    pressure: 12,
    pH: 0
  },
  {
    time: 1,
    temperature: 20,
    pressure: 22,
    pH: 6
  },
  {
    time: 2,
    temperature: 25,
    pressure: 13,
    pH: 8
  },
  {
    time: 3,
    temperature: 29,
    pressure: 12,
    pH: 7
  },
]

const HistoricalTrends = () => {
  return (
		<Card className="mt-8 bg-gray-800 border-gray-700">
			<CardHeader>
				<CardTitle>Historical Trends</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={chartData}>
						<XAxis dataKey="time" stroke="#ffffff" />
						<YAxis stroke="#ffffff" />
						<Tooltip 
							contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
							labelStyle={{ color: '#ffffff' }}
						/>
						<Line type="monotone" dataKey="temperature" stroke="#DE0909" strokeWidth={2} dot={false} />
						<Line type="monotone" dataKey="pressure" stroke="#22c55e" strokeWidth={2} dot={false} />
						<Line type="monotone" dataKey="pH" stroke="#eab308" strokeWidth={2} dot={false} />
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
  );
}

export default HistoricalTrends;

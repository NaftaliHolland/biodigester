import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const MetricCard = ({ metric }) => {
  return (
    <Card className="bg-muted border-slate-500">
			 <CardHeader>
        <CardTitle className={`text-${metric.color}-400`}>{metric.title}</CardTitle>
       </CardHeader>
      <CardContent>
        <Progress value={((metric.value - metric.min) / (metric.max - metric.min) * 100) } indicatorColor={metric.color} />
      <p>{ metric.value } { metric.unit }</p>
      </CardContent>
    </Card>
  );
}

export default MetricCard;

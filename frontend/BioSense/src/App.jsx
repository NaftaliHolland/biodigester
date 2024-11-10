import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button';
import MetricCard from '@/components/metricCard';
import Layout from '@/components/layout';
import HistoricalTrends from '@/components/historicalTrends';
import { database, ref, onValue } from "@/firebase/firebaseConfig";

function App() {
  const [data, setData] = useState(null);
  const [metrics, setMetrics] = useState([
    {
      title: 'Temperature',
      value: 0,
      color: 'red',
      unit: 'C',
      min: 20,
      max: 60,
      optimalMin: 30,
      optimalMax: 50
    },
    {
      title: 'Pressure',
      value: 0,
      color: 'green',
      unit: 'C',
      min: 0,
      max: 60,
      optimalMin: 30,
      optimalMax: 50
    },
    {
      title: 'pH Level',
      value: 0,
      color: 'yellow',
      unit: 'C',
      min: 5,
      max: 60,
      optimalMin: 30,
      optimalMax: 50
    },
  ])
	
  useEffect(() => {
    const temperatureRef = ref(database, 'Temperature')
    const pressureRef = ref(database, 'Pressure')

    onValue(temperatureRef, (snapshot) => {
      const tempValue = snapshot.val();
      setMetrics((prevState) =>
        prevState.map((metric) =>
          metric.title === 'Temperature'
          ? {...metric, value: tempValue}
          : metric)
        )});

    onValue(pressureRef, (snapshot) => {
      const pressValue = snapshot.val();
      setMetrics((prevState) =>
        prevState.map((metric) =>
          metric.title === 'Pressure'
          ? {...metric, value: pressValue}
          : metric)
        )});

      console.log(metrics)
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        { metrics.map((metric, index) =>
          <MetricCard key={index} metric={metric}/>
        )}
        <div className="md:col-span-3">
          <HistoricalTrends />
        </div>
      </div>
    </Layout>
  )
}

export default App

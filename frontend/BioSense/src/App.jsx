import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button';
import MetricCard from '@/components/metricCard';
import Layout from '@/components/layout';
import HistoricalTrends from '@/components/historicalTrends';

const metrics = [
  {
    title: 'Temperature',
    value: 40,
    color: 'red',
    unit: 'C',
    min: 20,
    max: 60,
    optimalMin: 30,
    optimalMax: 50
  },
  {
    title: 'Pressure',
    value: 50,
    color: 'green',
    unit: 'C',
    min: 20,
    max: 60,
    optimalMin: 30,
    optimalMax: 50
  },
  {
    title: 'pH Level',
    value: 10,
    color: 'yellow',
    unit: 'C',
    min: 5,
    max: 60,
    optimalMin: 30,
    optimalMax: 50
  },
]

// Create a stream of data to simulate data from the server
//
//
function App() {
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

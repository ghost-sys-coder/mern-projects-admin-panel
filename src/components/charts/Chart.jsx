
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './charts.scss';

const Chart = ({aspect, title}) => {
    // temporary data
    const data = [
        { month: 'January', Total: 1200 },
        { month: 'February', Total: 2100 },
        { month: 'March', Total: 800 },
        { month: 'April', Total: 1600 },
        { month: 'May', Total: 2100 },
        { month: 'June', Total: 1000 },
        { month: 'July', Total: 900 },
    ];

  return (
      <div className='chart'>
      <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke='gray' />
            <CartesianGrid strokeDasharray="3 3" className='chart-grid' />
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
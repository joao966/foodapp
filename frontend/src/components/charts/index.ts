import dynamic from 'next/dynamic';

const AreaChart = dynamic(() => import('recharts/').then((module) => module.AreaChart), { ssr: false });

export default AreaChart;

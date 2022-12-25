import dynamic from 'next/dynamic';

const AreaChart = dynamic(() => import('recharts/').then((module) => module.AreaChart), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts/').then((module) => module.ResponsiveContainer), { ssr: false });

export { AreaChart, ResponsiveContainer };

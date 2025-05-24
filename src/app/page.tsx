import dynamic from 'next/dynamic';

const Index = dynamic(() => import('../pages/Index'), {
  ssr: true
});

export default function Home() {
  return <Index />;
}

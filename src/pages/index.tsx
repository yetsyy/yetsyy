
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { i18n } from '../../next-i18next.config';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${i18n.defaultLocale}`);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center px-4">
      <h1 className="text-4xl font-bold">Loading...</h1>
    </div>
  );
};

export default Index;

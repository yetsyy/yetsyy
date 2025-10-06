
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../../next-i18next.config';

export const getStaticPaths = async () => ({
  fallback: false,
  paths: i18n.locales.map((lang) => ({
    params: {
      locale: lang,
    },
  })),
});

export async function getStaticProps({ params }: { params: { locale: string } }) {
  return {
    props: {
      ...(await serverSideTranslations(params.locale, ['common'])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        {t('welcome')}
      </h1>

      <p className="mt-3 text-lg sm:text-xl md:text-2xl max-w-2xl">
        {t('data_scientist')}
      </p>
    </div>
  );
}

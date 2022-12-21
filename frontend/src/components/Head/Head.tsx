import { Box } from '@mui/system';
import Head from 'next/head';

type Props = {
  title: string;
  key?: string;
  content: string;
};

export const HeadPage = ({ title, content }: Props) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Box>
  );
};

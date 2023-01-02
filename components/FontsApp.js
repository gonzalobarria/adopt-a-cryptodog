import { Inter, Chicle } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

const chicle = Chicle({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-chicle',
});

export const fonts = `${inter.className}  ${chicle.variable}`;

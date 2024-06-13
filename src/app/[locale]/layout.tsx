import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "../globals.css";
import Nav from './Nav';
import { Inter } from "next/font/google";

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio of a full-stack developer',
};
const inter = Inter({ subsets: ["latin"] });


export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={
          inter.className + " bg-gradient-to-br	dark:from-slate-950 dark:to-gray"
        }>
        <NextIntlClientProvider messages={messages}>
          <Nav/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
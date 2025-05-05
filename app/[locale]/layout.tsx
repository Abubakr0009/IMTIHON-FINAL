import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/query/QueryProvide";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { CotegoryContext } from "@/context/Context";
import { Layout } from "@/features";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Toaster } from 'react-hot-toast';
export const metadata: Metadata = {
  title: "Ashyo - Online Store",
  description: "An e-commerce platform for unique products",
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body>
        <NextIntlClientProvider>
          <QueryProvider>
            <ThemeProvider>
              <CotegoryContext>
                <Toaster position="top-right" />
                <Layout>{children}</Layout>
              </CotegoryContext>
            </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

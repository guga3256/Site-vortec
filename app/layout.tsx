import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SmoothScroll } from '@/components/scroll'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vortec | Marketing & Soluções para Negócios Locais',
  description:
    'Colocamos a sua empresa nas primeiras posições do Google. SEO Local, sites de alta conversão e gestão de reputação para negócios locais. Faça um diagnóstico gratuito.',
  generator: 'v0.app',
  keywords: [
    'SEO Local',
    'Google Meu Negócio',
    'Marketing Digital',
    'Criação de Sites',
    'Negócios Locais',
    'Vortec',
  ],
  openGraph: {
    title: 'Vortec | Marketing & Soluções para Negócios Locais',
    description:
      'Transformamos a sua presença digital no seu melhor vendedor, trabalhando 24 horas por dia.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#05070c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <head>
        {/* Ao atualizar a página, sempre voltar para o topo (home): o navegador
            não restaura a rolagem e o #âncora sai da URL antes de pular até ela. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname+location.search);window.scrollTo(0,0);addEventListener('load',function(){window.scrollTo(0,0)})`,
          }}
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

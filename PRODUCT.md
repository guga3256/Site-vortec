# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Comércios locais pequenos e médios (ex: dentistas, clínicas, prestadores de serviço) que dependem de clientes da própria região e estão perdendo movimento porque não aparecem no Google/Google Maps quando o cliente pesquisa.

## Product Purpose

A Vortec Marketing & Soluções vende presença digital para negócios locais: domínio do Google Maps (SEO local / Local Pack), um site de alta conversão focado em gerar contato via WhatsApp, e gestão de reputação (avaliações). O objetivo declarado é converter buscas locais em clientes reais, não métricas de vaidade.

## Positioning

Foco 100% em intenção de compra: posicionar o negócio onde o cliente já está pronto para comprar (Google/Maps), e converter essa visita em contato real (WhatsApp) — em vez de vender curtidas, seguidores ou outras métricas de vaidade como agências de marketing genéricas costumam fazer.

## Operating Context

Site institucional/landing page em Next.js (App Router), com seções: Hero, Pain (diagnóstico de problemas), Solution/Método (SEO local, site, reputação), Authority (por que escolher a Vortec), Comparison (antes/depois), Final CTA. CTA principal é "Diagnóstico Gratuito", com contato via WhatsApp (`whatsapp-button.tsx`).

## Capabilities and Constraints

- Stack existente: Next.js 16 (Turbopack), React 19, Tailwind CSS 4, shadcn/ui, lucide-react.
- Sem backend/CMS aparente — conteúdo hardcoded nos componentes de seção.
- Sem depoimentos, cases ou números de clientes reais no momento — não inventar prova social até haver casos reais.

## Brand Commitments

Nome: Vortec Marketing & Soluções. Paleta atual escura com azul primário (dark mode), tipografia display/sans em contraste. Logo em `components/logo.tsx` (VortecMark).

## Evidence on Hand

Nenhum depoimento, case ou número de cliente real disponível ainda. Não fabricar testemunhos, benchmarks ou estatísticas de clientes — o site deve seguir sem prova social até haver dados reais.

## Product Principles

1. Falar para o dono de comércio local pequeno/médio, não para marketing de marca ou vaidade.
2. Toda promessa se ancora em intenção de compra real (busca local) e contato mensurável (WhatsApp), nunca em métricas de vanity.
3. Nunca inventar prova social (depoimentos, números, cases) — ausência de evidência é um fato a preservar, não a esconder.
4. Preservar o mecanismo de diferenciação: SEO local + site de conversão + reputação, como pacote, não como serviços avulsos.

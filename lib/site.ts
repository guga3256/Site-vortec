// Substitua pelo número real da Vortec (formato internacional, só dígitos).
export const WHATSAPP_NUMBER = '5599999999999'

const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Quero o Diagnóstico Gratuito de como o meu negócio aparece hoje no Google.',
)

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export const NAV_LINKS = [
  { label: 'O Problema', href: '#problema' },
  { label: 'O Método', href: '#metodo' },
  { label: 'Antes & Depois', href: '#comparativo' },
  { label: 'A Vortec', href: '#autoridade' },
]

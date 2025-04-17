import { Font } from '@react-pdf/renderer'

Font.register({
  family: 'Poppins',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-400-normal.ttf', fontWeight: 'normal' },
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-500-normal.ttf', fontWeight: 'medium' },
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-600-normal.ttf', fontWeight: 'semibold' },
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-700-normal.ttf', fontWeight: 'bold' }
  ]
})

Font.registerHyphenationCallback((word) => {
  return [word]
})

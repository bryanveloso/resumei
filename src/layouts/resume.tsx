import { Document, Page } from '@react-pdf/renderer'

import Standard from './standard'
import { Resume } from '@/types/resume'

// Importing fonts...
import '@/utils/fonts'

const layouts = {
  standard: Standard
}

type LayoutKey = keyof typeof layouts

const Resume = ({ data, layout = 'standard' }: { data: Resume; layout?: LayoutKey }) => {
  const LayoutComponent = layouts[layout] || layouts.standard

  return (
    <Document>
      <Page size="LETTER" style={{ color: '#1f2326', fontFamily: 'Poppins', fontSize: 9 }}>
        <LayoutComponent data={data} />
      </Page>
    </Document>
  )
}

export default Resume

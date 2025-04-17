import { useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer'

import baseData from './data/base.json'
import Resume from './layouts/resume'

import './index.css'

type LayoutKey = 'standard'
type VersionKey = 'base' | string

export function App() {
  const [selectedLayout, setSelectedLayout] = useState<LayoutKey>('standard')
  const [selectedVersion, setSelectedVersion] = useState<VersionKey>('base')

  const versionData: Record<VersionKey, typeof baseData> = {
    base: baseData
  }

  return (
    <div className="app">
      <h1>Resumei</h1>
      <div className="logo-container"></div>

      <div className="controls">
        <div className="version-selector">
          <label htmlFor="version">Select Version:</label>
          <select
            id="version"
            name="version"
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}>
            <option value="base">Base</option>
          </select>
        </div>

        <div className="layout-selector">
          <label htmlFor="layout">Select Layout:</label>
          <select
            id="layout"
            name="layout"
            value={selectedLayout}
            onChange={(e) => setSelectedLayout(e.target.value as LayoutKey)}>
            <option value="standard">Standard</option>
          </select>
        </div>
      </div>

      <div className="preview">
        <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
          <Resume data={versionData[selectedVersion]} layout={selectedLayout} />
        </PDFViewer>
      </div>
    </div>
  )
}

export default App

import type { FC } from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'

import Experience from '@/components/experience'
import Header from '@/components/header'
import type { Resume } from '@/types/resume'

interface LayoutProps {
  data: Resume
}

const styles = StyleSheet.create({
  container: {},
  content: {},
  section: {}
})

const Standard: FC<LayoutProps> = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Header data={data.basics} />

      <View style={styles.section}>
        <Experience data={data.experience} />
      </View>

      <View style={styles.section}></View>
    </View>
  </View>
)

export default Standard

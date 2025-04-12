import type { FC } from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import type { Basics } from '@/types/resume'

interface HeaderProps {
  data: Basics
}

const styles = StyleSheet.create({
  section: { paddingTop: 36, paddingLeft: 36, paddingRight: 36, paddingBottom: 36 },
})

const Header: FC<HeaderProps> = ({ data }) => (
  <View style={styles.section}>
    <View>
      <Text>
        {data.name}, {data.label}
      </Text>
    </View>
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Text>{data.location}</Text>
      <Text>{data.email}</Text>
      <Text>{data.phone}</Text>
    </View>
    <View>
      <Text>Summary</Text>
      <Text>{data.summary}</Text>
    </View>
  </View>
)

export default Header

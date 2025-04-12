import { Experience } from '@/types/resume'
import { Text, View, StyleSheet, Svg, Circle } from '@react-pdf/renderer'
import { FC } from 'react'

interface ExperienceProps {
  data: Experience[]
}

const styles = StyleSheet.create({
  section: {},
  sectionHeader: {
    borderTop: '1px solid #e4ecf3',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingLeft: 36,
    paddingRight: 36,
    paddingTop: 12,
    textTransform: 'uppercase'
  },
  item: {
    marginBottom: 12,
    paddingLeft: 36,
    paddingRight: 36
  },
  highlights: {},
  highlight: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  bullet: {
    marginTop: 5
  },
  text: {
    flex: 1,
    paddingBottom: 0,
    marginBottom: 0
  }
})

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return 'Present'

  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
}

const ExperienceItem: FC<{ experience: Experience }> = ({ experience }) => (
  <View style={styles.item}>
    <Text style={{ fontWeight: 'semibold', fontSize: 11 }}>
      {experience.position} at {experience.company}
      {/* , {experience.location} */}
    </Text>
    <Text style={{ color: '#44484e', fontSize: 8 }}>
      {formatDate(experience.startDate)} &ndash; {formatDate(experience.endDate)}
    </Text>
    <View style={styles.highlights}>
      {experience.highlights.map((highlight, index) => (
        <View key={index} style={styles.highlight}>
          <View style={styles.bullet}>
            <Svg width={3} height={3}>
              <Circle cx="0" cy="0" r="2" fill="black" />
            </Svg>
          </View>
          <Text style={styles.text}>{highlight}</Text>
        </View>
      ))}
    </View>
  </View>
)

const Experience: FC<ExperienceProps> = ({ data }) => (
  <View style={styles.section}>
    <Text style={styles.sectionHeader}>Experience</Text>
    {data.map((experience, index) => (
      <ExperienceItem key={index} experience={experience} />
    ))}
  </View>
)

export default Experience

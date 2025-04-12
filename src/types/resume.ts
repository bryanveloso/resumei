export interface Basics {
  name: string
  label: string
  email: string
  phone: string
  location: string
  summary: string
}

export interface Experience {
  company: string
  position: string
  location: string
  startDate: string
  endDate?: string
  url: string
  highlights: string[]
}

export interface Education {
  institution: string
  area: string
  studyType: string
  startDate: string
  endDate?: string
  gpa?: string
  courses?: string[]
}

export interface Resume {
  basics: Basics
  experience: Experience[]
  education: Education[]
  [key: string]: any
}

export type ResumeVersion = 'base' | string

export type LayoutType = 'standard' | string

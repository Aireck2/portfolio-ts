import { DEFlag, ESFlag, USFlag } from '@icons'

export type Languages = keyof typeof constants['languages']

const constants = {
  languages: {
    es: { text: 'Español', icon: <ESFlag /> },
    en: { text: 'English', icon: <USFlag /> },
    de: { text: 'Deutsch', icon: <DEFlag /> },
  },
}

export default constants

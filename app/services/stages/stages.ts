import {
  execute as hello
} from './hello'
import {
  execute as menu
} from './menu'

export type CustomerDescriptionType = 'hello' | 'menu' | 'request'

interface StagesInterface {
  customer?: {
    description: CustomerDescriptionType
    execute: Function
  }
}

const stages: StagesInterface[] = [
  {
    customer: {
      description: 'hello',
      execute: hello
    }
  },
  {
    customer: {
      description: 'menu',
      execute: menu
    }
  },
  {
    customer: {
      description: 'request',
      execute: menu
    }
  }
]

export default stages
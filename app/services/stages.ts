import {
    execute as hello
  } from './stages/hello'

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
    // {
    //   customer: {
    //     description: 'menu',
    //     execute: execute1
    //   }
    // },
    // {
    //   customer: {
    //     description: 'request',
    //     execute: execute1
    //   }
    // }
  ]
  
  export default stages
// @ts-ignore
import { Resolver, Query, Arg } from 'type-graphql'

import { Dog } from './dogs'
import dogs from './dogs.json'

@Resolver()
export class DogsResolver {
    @Query(() => [Dog])
    dogs(): Dog[] {
        return dogs;
    }
}

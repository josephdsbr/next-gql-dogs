// @ts-ignore
import { Resolver, Query, Arg } from 'type-graphql'

import { Dog } from './dogs'
import dogs from './dogs.json'

@Resolver()
export class DogsResolver {
    @Query(() => Dog, { nullable: true })
    dog(@Arg("name", () => String) name: string): Dog | undefined {
        const dog =  dogs.find((dog) => dog.name === name);

        if (!dog) {
            throw new Error("Dog not found")
        }

        return dog;
    }

    @Query(() => [Dog])
    dogs(): Dog[] {
        return dogs;
    }
}

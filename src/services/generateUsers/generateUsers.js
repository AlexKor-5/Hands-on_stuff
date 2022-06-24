import { faker } from '@faker-js/faker'

export const generateUsers = (amount) => {
    return [...Array(amount)].map(() => ({
        id: faker.database.mongodbObjectId(),
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        city: faker.address.city(),
        country: faker.address.country(),
        countryCode: faker.address.countryCode(),
        street: faker.address.street(),
    }))
}

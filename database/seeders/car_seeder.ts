import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Car from '#models/car'

export default class extends BaseSeeder {
  async run() {
    await Car.createMany([
      { registrationNumber: 'TOY001BM', brand: 'Toyota', model: 'Camry', notes: 'Car 1' },
      { registrationNumber: 'HON002CR', brand: 'Honda', model: 'Civic', notes: 'Car 2' },
      { registrationNumber: 'BMW003MS', brand: 'BMW', model: 'M3', notes: 'Car 3' },
      { registrationNumber: 'MER004GL', brand: 'Mercedes-Benz', model: 'GLC', notes: 'Car 4' },
      { registrationNumber: 'AUD005Q5', brand: 'Audi', model: 'Q5', notes: 'Car 5' },
      { registrationNumber: 'VOL006GT', brand: 'Volkswagen', model: 'Golf', notes: 'Car 6' },
      { registrationNumber: 'FOR007MU', brand: 'Ford', model: 'Mustang', notes: 'Car 7' },
      { registrationNumber: 'CHE008CA', brand: 'Chevrolet', model: 'Camaro', notes: 'Car 8' },
      { registrationNumber: 'HYU009TU', brand: 'Hyundai', model: 'Tucson', notes: 'Car 9' },
      { registrationNumber: 'NIS010AL', brand: 'Nissan', model: 'Altima', notes: 'Car 10' },
      { registrationNumber: 'TOY011PR', brand: 'Toyota', model: 'Prius', notes: 'Car 11' },
      { registrationNumber: 'HON012AC', brand: 'Honda', model: 'Accord', notes: 'Car 12' },
      { registrationNumber: 'BMW013X5', brand: 'BMW', model: 'X5', notes: 'Car 13' },
      { registrationNumber: 'MER014CL', brand: 'Mercedes-Benz', model: 'C-Class', notes: 'Car 14' },
      { registrationNumber: 'AUD015A4', brand: 'Audi', model: 'A4', notes: 'Car 15' },
      { registrationNumber: 'VOL016PA', brand: 'Volkswagen', model: 'Passat', notes: 'Car 16' },
      { registrationNumber: 'FOR017F1', brand: 'Ford', model: 'F-150', notes: 'Car 17' },
      { registrationNumber: 'CHE018CO', brand: 'Chevrolet', model: 'Corvette', notes: 'Car 18' },
      { registrationNumber: 'HYU019EL', brand: 'Hyundai', model: 'Elantra', notes: 'Car 19' },
      { registrationNumber: 'NIS020RO', brand: 'Nissan', model: 'Rogue', notes: 'Car 20' },
    ])
  }
}

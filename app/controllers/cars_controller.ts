import { HttpContext } from '@adonisjs/core/http'
import Car from '#models/car'
import { createCarValidator, updateCarValidator } from '#validators/car'
import CarModel from '#models/car_model'

export default class CarsController {
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 10
    const search = request.input('search', '')

    const query = Car.query().orderBy('created_at', 'desc')

    if (search) {
      query.where((builder) => {
        builder.where('registration_number', 'LIKE', `%${search}%`)
      })
    }

    const cars = await query.paginate(page, limit)
    return response.json(cars)
  }

  async store({ request, response }: HttpContext) {
    const validated = await createCarValidator.validate(request.all())
    const car = await Car.create(validated)
    return response.status(201).json(car)
  }

  async show({ params, response }: HttpContext) {
    const car = await Car.find(params.id)
    if (!car) {
      return response.status(404).json({ message: 'Car not found' })
    }
    return response.json(car)
  }

  async update({ params, request, response }: HttpContext) {
    const car = await Car.find(params.id)
    if (!car) {
      return response.status(404).json({ message: 'Car not found' })
    }
    const data = { ...request.body(), id: params.id }
    const validated = await updateCarValidator.validate(data)
    await car.merge(validated).save()
    return response.json(car)
  }

  async destroy({ params, response }: HttpContext) {
    const car = await Car.find(params.id)
    if (!car) {
      return response.status(404).json({ message: 'Car not found' })
    }
    await car.delete()
    return response.json({ message: 'Car deleted successfully' })
  }

  public async getCarModels({ response }: HttpContext) {
    try {
      const cars = await CarModel.all()
      const carModels: Record<string, string[]> = {}

      cars.forEach((car) => {
        if (!carModels[car.brand]) {
          carModels[car.brand] = []
        }
        carModels[car.brand].push(car.model)
      })

      return response.json(carModels)
    } catch (error) {
      return response.status(500).json({
        message: 'Error fetching car models',
        error: error.message,
      })
    }
  }
}

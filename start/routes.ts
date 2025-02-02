import router from '@adonisjs/core/services/router'
const CarsController = () => import('#controllers/cars_controller')

router.get('/', async () => {
  return { success: true }
})

router.get('/api/cars', [CarsController, 'index'])
router.post('/api/cars', [CarsController, 'store'])
router.get('/api/cars/:id', [CarsController, 'show'])
router.put('/api/cars/:id', [CarsController, 'update'])
router.delete('/api/cars/:id', [CarsController, 'destroy'])
router.get('/api/car-models', [CarsController, 'getCarModels'])

import vine from '@vinejs/vine'

export const createCarValidator = vine.compile(
  vine.object({
    registrationNumber: vine
      .string()
      .minLength(1)
      .maxLength(30)
      .unique(async (db, value) => {
        const car = await db.from('cars').where('registration_number', value).first()
        return !car
      }),
    brand: vine.string().trim().minLength(1).maxLength(20),
    model: vine.string().trim().minLength(1).maxLength(20),
    notes: vine.string().trim().maxLength(250).optional(),
  })
)

export const updateCarValidator = vine.compile(
  vine.object({
    registrationNumber: vine
      .string()
      .minLength(1)
      .maxLength(30)
      .unique(async (db, value, field) => {
        const car = await db
          .from('cars')
          .whereNot('id', field.data.id)
          .where('registration_number', value)
          .first()
        return !car
      }),
    brand: vine.string().trim().minLength(1).maxLength(20),
    model: vine.string().trim().minLength(1).maxLength(20),
    notes: vine.string().trim().maxLength(250).optional(),
  })
)

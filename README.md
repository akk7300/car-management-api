# Car Management System
A REST API built with AdonisJS 6 for managing vehicle information.

## Prerequisites
- Node.js >= 20
- Mysql >= 8

## Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd car-management-api
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Generate application key:
```bash
node ace generate:key
```
Update .env with your credentials
```
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=<generated-key>
NODE_ENV=development
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```

5. Run migrations:
```bash
node ace migration:run
```

6. Seed the database:
```bash
node ace db:seed
```

7. Start the development server:
```bash
node ace serve --hmr
```

The api server will run at http://localhost:3333

## API Endpoints
- `GET /api/cars` - List all cars (with pagination)
  - Query params: 
    - `page`: Page number (default: 1)
    - `search`: Search by registration number
- `POST /api/cars` - Create a new car
- `GET /api/cars/:id` - Get car details
- `PUT /api/cars/:id` - Update car details
- `DELETE /api/cars/:id` - Delete a car

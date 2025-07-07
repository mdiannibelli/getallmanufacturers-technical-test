# Backend - API de Fabricantes

Backend simple desarrollado con NestJS que expone un endpoint para obtener información de fabricantes de vehículos.

## 🚀 Tecnologías

- **NestJS** - Framework de Node.js
- **TypeScript** - Lenguaje de programación
- **Axios** - Cliente HTTP para llamadas a APIs externas

## 📋 Endpoints

API_URL crudo utilizado: https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json

### GET /manufacturers

Obtiene la lista completa de fabricantes de vehículos desde la API de NHTSA.

**URL:** `http://localhost:3000/manufacturers`

**Método:** `GET`

**Respuesta exitosa (200):**

```json
{
  "Count": 10000,
  "Message": "Response returned successfully",
  "SearchCriteria": null,
  "Results": [
    {
      "Country": "UNITED STATES (USA)",
      "Mfr_CommonName": "Tesla",
      "Mfr_ID": 955,
      "Mfr_Name": "TESLA, INC.",
      "VehicleTypes": [
        {
          "IsPrimary": true,
          "Name": "Passenger Car"
        }
      ]
    }
  ]
}
```

**Respuesta de error (404):**

```json
{
  "message": "No manufacturers found",
  "statusCode": 404
}
```

**Respuesta de error (500):**

```json
{
  "message": "Failed to fetch manufacturers: [error details]",
  "statusCode": 500
}
```

## 🛠️ Instalación y Ejecución

1. **Instalar dependencias:**

   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**

   ```bash
   npm run start:dev
   ```

3. **Ejecutar en modo producción:**
   ```bash
   npm run build
   npm run start:prod
   ```

## 📁 Estructura del Proyecto

```
src/
├── app.module.ts              # Módulo principal
├── main.ts                    # Punto de entrada
└── manufacturers/
    ├── manufacturers.module.ts    # Módulo de fabricantes
    ├── manufacturer.controller.ts # Controlador del endpoint
    ├── manufacturers.service.ts   # Lógica de negocio
    └── interfaces/
        └── get-response.interface.ts # Tipos de respuesta
```

## 🔧 Configuración

- **Puerto:** 3000 (configurable via variable de entorno PORT)
- **API Externa:** NHTSA Vehicle API (https://vpic.nhtsa.dot.gov/api/)

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm run test

# Ejecutar tests e2e
npm run test:e2e
```

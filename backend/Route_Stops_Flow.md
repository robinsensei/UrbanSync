# Route Stops Management Flow

## Overview
This document outlines the step-by-step process for managing route stops in the UrbanSync system. Route stops represent the physical locations where buses stop along a route.

## Prerequisites
1. Admin access to the system
2. Authentication token (obtained through login)

## Step-by-Step Guide

### 1. Create Individual Stops First
Before creating route stops, you need to create the individual stops that will be part of routes.

```http
POST /api/stops
Content-Type: application/json
Authorization: Bearer <your-token>

{
  "name": "Stop Name",
  "location": "Stop Location Description",
  "coordinates": {
    "latitude": 12.3456,
    "longitude": 78.9012
  }
}
```

### 2. Create a Route
Before adding stops to a route, create the route itself.

```http
POST /api/routes
Content-Type: application/json
Authorization: Bearer <your-token>

{
  "name": "Route Name",
  "description": "Route Description",
  "status": "ACTIVE"
}
```

### 3. Add Stops to the Route
After creating both stops and the route, you can add stops to the route in sequence.

```http
POST /api/routes/{routeId}/stops
Content-Type: application/json
Authorization: Bearer <your-token>

{
  "stopId": 1,
  "sequence": 1,
  "estimatedTime": "5",
  "distance": "2.5"
}
```

### 4. View Route Stops
To view all stops in a specific route:

```http
GET /api/routes/{routeId}/stops
Authorization: Bearer <your-token>
```

### 5. Reorder Route Stops
To change the sequence of stops in a route:

```http
PUT /api/routes/{routeId}/stops/{stopId}
Content-Type: application/json
Authorization: Bearer <your-token>

{
  "sequence": 2,
  "estimatedTime": "7",
  "distance": "3.0"
}
```

### 6. Remove a Stop from Route
To remove a specific stop from a route:

```http
DELETE /api/routes/{routeId}/stops/{stopId}
Authorization: Bearer <your-token>
```

## Best Practices
1. Always create stops before adding them to routes
2. Maintain sequential order in stop sequences (1, 2, 3, etc.)
3. Update estimated times and distances accurately
4. Validate stop coordinates before creation

## Common Operations

### Getting All Stops
```http
GET /api/stops
Authorization: Bearer <your-token>
```

### Getting Route Details
```http
GET /api/routes/{routeId}
Authorization: Bearer <your-token>
```

### Updating Stop Information
```http
PUT /api/stops/{stopId}
Content-Type: application/json
Authorization: Bearer <your-token>

{
  "name": "Updated Stop Name",
  "location": "Updated Location",
  "coordinates": {
    "latitude": 12.3456,
    "longitude": 78.9012
  }
}
```

## Error Handling
- 400 Bad Request: Invalid input data
- 404 Not Found: Route or stop not found
- 409 Conflict: Duplicate stop in route
- 403 Forbidden: Insufficient permissions

## Notes
- Ensure all distances are in kilometers
- Estimated times should be in minutes
- Coordinate values should be valid latitude and longitude
- Route stops should be created in logical geographical sequence
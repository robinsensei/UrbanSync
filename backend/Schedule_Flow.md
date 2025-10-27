# Schedule Management Flow

## Overview
This document outlines the process for managing bus schedules in the UrbanSync system. Schedules coordinate buses, routes, and drivers for specific times.

## Prerequisites
1. Admin access to the system
2. Authentication token (obtained through login)
3. Existing routes, buses, and employees (drivers)

## Step-by-Step Guide

### 1. Check Available Resources
Before creating a schedule, verify available resources:

#### Check Available Buses
```http
GET /api/buses
Authorization: Bearer <your-token>
```

#### Check Available Routes
```http
GET /api/routes
Authorization: Bearer <your-token>
```

#### Check Available Drivers
```http
GET /api/employees
Authorization: Bearer <your-token>
```

### 2. Create a Schedule
Create a new schedule by combining bus, route, and driver:

```http
POST /api/schedules
Content-Type: application/json
Authorization: Bearer <your-token>

{
  "busId": 1,
  "routeId": 1,
  "driverId": 1,
  "departureDateTime": "2025-10-27T08:00:00",
  "status": "SCHEDULED"
}
```

### 3. View Schedules
View all schedules or filter by specific criteria:

```http
GET /api/schedules
Authorization: Bearer <your-token>
```

Optional query parameters:
- `date`: Filter by specific date
- `routeId`: Filter by specific route
- `busId`: Filter by specific bus
- `driverId`: Filter by specific driver

### 4. Update Schedule
Modify an existing schedule:

```http
PUT /api/schedules/{scheduleId}
Content-Type: application/json
Authorization: Bearer <your-token>

{
  "busId": 2,
  "routeId": 1,
  "driverId": 3,
  "departureDateTime": "2025-10-27T09:00:00",
  "status": "RESCHEDULED"
}
```

### 5. Cancel Schedule
Cancel a specific schedule:

```http
DELETE /api/schedules/{scheduleId}
Authorization: Bearer <your-token>
```

## Schedule States
- SCHEDULED: Initial state
- IN_PROGRESS: Currently running
- COMPLETED: Successfully finished
- CANCELLED: Cancelled before start
- DELAYED: Running behind schedule
- RESCHEDULED: Time/date changed

## Best Practices
1. Check resource availability before scheduling
2. Avoid scheduling same resources (bus/driver) at overlapping times
3. Allow sufficient buffer time between schedules
4. Consider route duration when scheduling
5. Regularly update schedule status

## Common Operations

### Get Schedule Details
```http
GET /api/schedules/{scheduleId}
Authorization: Bearer <your-token>
```

### Get Today's Schedules
```http
GET /api/schedules?date=today
Authorization: Bearer <your-token>
```

### Update Schedule Status
```http
PATCH /api/schedules/{scheduleId}/status
Content-Type: application/json
Authorization: Bearer <your-token>

{
  "status": "IN_PROGRESS"
}
```

## Validation Rules
1. Departure time must be in the future
2. Bus must be in ACTIVE status
3. Driver must be available and qualified
4. Route must be active
5. No overlapping schedules for same resources

## Error Handling
- 400 Bad Request: Invalid schedule data
- 404 Not Found: Resource not found
- 409 Conflict: Resource scheduling conflict
- 403 Forbidden: Insufficient permissions

## Notes
- All times should be in UTC
- Consider driver work hours and breaks
- Account for maintenance schedules
- Regular status updates important
- Keep audit trail of changes
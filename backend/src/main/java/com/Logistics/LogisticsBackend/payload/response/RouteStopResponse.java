package com.Logistics.LogisticsBackend.payload.response;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class RouteStopResponse {
    private Long id;
    private Long routeId;
    private String routeName;
    private Long stopId;
    private String stopName;
    private Integer stopOrder;
    private LocalTime arrivalTime;
    private LocalTime departureTime;
    private String remarks;
}

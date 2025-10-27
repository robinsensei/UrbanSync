
package com.Logistics.LogisticsBackend.controller;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Logistics.LogisticsBackend.payload.response.RouteStopResponse;
import com.Logistics.LogisticsBackend.security.services.RouteStopService;

@RestController
@RequestMapping("/api/routestops")
public class RouteStopAdminController {
    private static final Logger logger = Logger.getLogger(RouteStopAdminController.class.getName());

    @Autowired
    private RouteStopService routeStopService;

    @GetMapping
    public ResponseEntity<?> getAllRouteStops() {
        logger.info("Received request for all route stops");
        try {
            List<RouteStopResponse> responses = routeStopService.getAllRouteStopResponses();
            if (responses == null || responses.isEmpty()) {
                logger.info("No route stops found");
                return ResponseEntity.noContent().build();
            }
            logger.log(Level.INFO, "Successfully retrieved {0} route stops", responses.size());
            return ResponseEntity.ok()
                    .header("X-Total-Count", String.valueOf(responses.size()))
                    .body(responses);
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Error fetching route stops", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/count")
    public ResponseEntity<Long> countRouteStops() {
        try {
            long count = routeStopService.countRouteStops();
            return ResponseEntity.ok(count);
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Error counting route stops", e);
            return ResponseEntity.internalServerError().build();
        }
    }
}
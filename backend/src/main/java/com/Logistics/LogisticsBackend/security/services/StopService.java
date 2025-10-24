package com.Logistics.LogisticsBackend.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Logistics.LogisticsBackend.exception.DuplicateResourceException;
import com.Logistics.LogisticsBackend.exception.ResourceNotFoundException;
import com.Logistics.LogisticsBackend.model.RouteStop;
import com.Logistics.LogisticsBackend.model.Stop;
import com.Logistics.LogisticsBackend.repository.RouteRepository;
import com.Logistics.LogisticsBackend.repository.RouteStopRepository;
import com.Logistics.LogisticsBackend.repository.StopRepository;

@Service
public class StopService {

    @Autowired
    private StopRepository stopRepository;

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private RouteStopRepository routeStopRepository;

    public List<Stop> getAllStops() {
        return stopRepository.findAll();
    }

    @Transactional
    public Stop createStop(Stop stop) {
        if (stopRepository.existsByName(stop.getName())) {
            throw new DuplicateResourceException("Error: Stop name is already taken!");
        }
        return stopRepository.save(stop);
    }

    @Transactional
    public void deleteStop(Long id) {
        // 1. Find the stop to be deleted, or throw an exception if it doesn't exist.
        Stop stopToDelete = stopRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stop not found with id: " + id));

        // 2. Find and delete all RouteStop entries associated with this Stop.
        // This maintains data integrity in the join table.
        List<RouteStop> routeStopsToDelete = routeStopRepository.findByStop(stopToDelete);
        routeStopRepository.deleteAll(routeStopsToDelete);

        // 3. Now that all associations are removed, delete the stop itself.
        stopRepository.delete(stopToDelete);
    }

    @Transactional
    public Stop updateStop(Long id, Stop stopDetails) {
        Stop stop = stopRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stop not found with id: " + id));

        // Check for name uniqueness if it's being changed
        if (!stop.getName().equals(stopDetails.getName()) && stopRepository.existsByName(stopDetails.getName())) {
            throw new DuplicateResourceException("Stop name is already in use!");
        }

        stop.setName(stopDetails.getName());
        stop.setAddress(stopDetails.getAddress());
        stop.setDescription(stopDetails.getDescription());
        stop.setType(stopDetails.getType());
        stop.setLandmark(stopDetails.getLandmark());
        stop.setStreet(stopDetails.getStreet());
        stop.setLatitude(stopDetails.getLatitude());
        stop.setLongitude(stopDetails.getLongitude());
        return stopRepository.save(stop);
    }
}
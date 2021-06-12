package com.webservice.flightservices.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webservice.flightservices.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

}

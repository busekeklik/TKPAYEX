package com.tkpayex.payex_webpage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tkpayex.payex_webpage.service.OfferService;
import com.tkpayex.payex_webpage.entity.Offer;

import java.util.List;

@RestController
public class OfferController {
    @Autowired
    private OfferService offerService;

    @GetMapping("/offers")
    public List<Offer> getOffers() {
        return offerService.getAllOffers();
    }
}
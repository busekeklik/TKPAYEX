package com.tkpayex.payex_webpage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tkpayex.payex_webpage.repository.OfferRepository;
import com.tkpayex.payex_webpage.entity.Offer;

import java.util.List;

@Service
public class OfferService {
    @Autowired
    private OfferRepository offerRepository;

    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }
}

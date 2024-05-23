package com.tkpayex.payex_webpage.service;

import com.tkpayex.payex_webpage.entity.Wallet;
import com.tkpayex.payex_webpage.repository.WalletRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WalletService {
    @Autowired
    private WalletRepository walletRepository;

    public Wallet getWalletDetails(Long userId) {
        return walletRepository.findById(userId).orElse(null);
    }
}

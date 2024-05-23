package com.tkpayex.payex_webpage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.tkpayex.payex_webpage.service.WalletService;
import com.tkpayex.payex_webpage.entity.Wallet;

@RestController
public class WalletController {
    @Autowired
    private WalletService walletService;

    @GetMapping("/wallet/{userId}")
    public Wallet getWalletByUserId(@PathVariable Long userId) {
        return walletService.getWalletDetails(userId);
    }
}

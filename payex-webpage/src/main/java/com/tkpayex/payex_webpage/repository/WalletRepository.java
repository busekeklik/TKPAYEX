package com.tkpayex.payex_webpage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tkpayex.payex_webpage.entity.Wallet;

public interface WalletRepository extends JpaRepository<Wallet, Long> {}

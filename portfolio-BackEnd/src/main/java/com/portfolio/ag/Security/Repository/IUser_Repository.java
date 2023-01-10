package com.portfolio.ag.Security.Repository;

import com.portfolio.ag.Security.Entity.User_security;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUser_Repository extends JpaRepository<User_security,Integer>{
    Optional<User_security> findByUserName(String userName);
    
    boolean existsByUserName(String userName);
    boolean existsByEmail(String email);
}

package com.portfolio.ag.Repository;

import com.portfolio.ag.Entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User,Integer> {
    public Optional<User> findByName(String name);
    public boolean existsByName(String name);
}

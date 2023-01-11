package com.portfolio.ag.Repository;

import com.portfolio.ag.Entity.Skills;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ISkills extends JpaRepository<Skills, Integer>{
    Optional<Skills> findBySkill(String skill);
    public boolean existsBySkill(String skill);
}
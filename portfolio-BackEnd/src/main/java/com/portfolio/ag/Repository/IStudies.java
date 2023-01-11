package com.portfolio.ag.Repository;

import com.portfolio.ag.Entity.Studies;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IStudies extends JpaRepository<Studies, Integer>{
    public Optional<Studies> findByStudyName(String studyName);
    public boolean existsByStudyName(String studyName);
}
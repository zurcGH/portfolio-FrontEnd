package com.portfolio.ag.Repository;

import com.portfolio.ag.Entity.WorkExp;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IWorkExp extends JpaRepository<WorkExp, Integer>{
    public Optional<WorkExp> findByWorkName(String workName);
    public boolean existsByWorkName(String workName);
}
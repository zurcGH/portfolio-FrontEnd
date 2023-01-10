package com.portfolio.ag.Security.Repository;

import com.portfolio.ag.Security.Entity.Role;
import com.portfolio.ag.Security.Enums.RoleName;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRole_Repository extends JpaRepository<Role,Integer>{
    Optional<Role> findByRoleName(RoleName roleName);
}

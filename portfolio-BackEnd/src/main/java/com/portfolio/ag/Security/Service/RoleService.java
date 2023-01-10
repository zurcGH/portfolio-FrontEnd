package com.portfolio.ag.Security.Service;

import com.portfolio.ag.Security.Entity.Role;
import com.portfolio.ag.Security.Enums.RoleName;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.ag.Security.Repository.IRole_Repository;

@Service
@Transactional
public class RoleService {
    @Autowired
    IRole_Repository iroleRepository;
    
    public Optional<Role> getByRoleName(RoleName roleName){
        return iroleRepository.findByRoleName(roleName);
    }
    
    public void save(Role role) {
        iroleRepository.save(role);
    }
}

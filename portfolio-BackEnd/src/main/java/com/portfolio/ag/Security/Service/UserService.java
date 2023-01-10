package com.portfolio.ag.Security.Service;

import com.portfolio.ag.Security.Entity.User_security;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.ag.Security.Repository.IUser_Repository;

@Service
@Transactional
public class UserService {
    @Autowired
    IUser_Repository iuserRepository;
    
    public Optional<User_security> getByUserName(String userName) {
        return iuserRepository.findByUserName(userName);
    }
    
    public boolean existsByUserName (String userName){
        return iuserRepository.existsByUserName(userName);
    }
    
    public boolean existsByEmail (String email){
        return iuserRepository.existsByEmail(email);
    }
    
    public void save(User_security user){
        iuserRepository.save(user);
    }
}

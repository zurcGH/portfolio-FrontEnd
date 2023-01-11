package com.portfolio.ag.Service;

import com.portfolio.ag.Entity.User;
import com.portfolio.ag.Repository.IUserRepository;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ImpUserService {
    @Autowired
    IUserRepository iuserRepository;
    
    public List<User> list(){
         return iuserRepository.findAll();
     }
     
     public Optional<User> getOne(int id){
         return iuserRepository.findById(id);
     }
     
     public Optional<User> getByName(String name){
         return iuserRepository.findByName(name);
     }
     
     public void save(User user){
         iuserRepository.save(user);
     }
     
     public void delete(int id){
         iuserRepository.deleteById(id);
     }
     
     public boolean existsById(int id){
         return iuserRepository.existsById(id);
     }
     
     public boolean existsByName(String name){
         return iuserRepository.existsByName(name);
     }
}

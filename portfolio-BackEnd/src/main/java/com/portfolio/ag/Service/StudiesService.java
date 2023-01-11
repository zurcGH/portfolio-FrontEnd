package com.portfolio.ag.Service;

import com.portfolio.ag.Entity.Studies;
import com.portfolio.ag.Repository.IStudies;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class StudiesService {
     @Autowired
     IStudies iStudies;
     
     public List<Studies> list(){
         return iStudies.findAll();
     }
     
     public Optional<Studies> getOne(int id){
         return iStudies.findById(id);
     }
     
     public Optional<Studies> getByStudyName(String studies){
         return iStudies.findByStudyName(studies);
     }
     
     public void save(Studies studies){
         iStudies.save(studies);
     }
     
     public void delete(int id){
         iStudies.deleteById(id);
     }
     
     public boolean existsById(int id){
         return iStudies.existsById(id);
     }
     
     public boolean existsByStudyName(String studies){
         return iStudies.existsByStudyName(studies);
     }
}
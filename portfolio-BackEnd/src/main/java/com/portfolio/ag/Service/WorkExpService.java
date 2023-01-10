package com.portfolio.ag.Service;

import com.portfolio.ag.Entity.WorkExp;
import com.portfolio.ag.Repository.IWorkExp;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class WorkExpService {
     @Autowired
     IWorkExp iworkExp;
     
     public List<WorkExp> list(){
         return iworkExp.findAll();
     }
     
     public Optional<WorkExp> getOne(int id){
         return iworkExp.findById(id);
     }
     
     public Optional<WorkExp> getByWorkName(String workName){
         return iworkExp.findByWorkName(workName);
     }
     
     public void save(WorkExp workExp){
         iworkExp.save(workExp);
     }
     
     public void delete(int id){
         iworkExp.deleteById(id);
     }
     
     public boolean existsById(int id){
         return iworkExp.existsById(id);
     }
     
     public boolean existsByWorkName(String workName){
         return iworkExp.existsByWorkName(workName);
     }
}
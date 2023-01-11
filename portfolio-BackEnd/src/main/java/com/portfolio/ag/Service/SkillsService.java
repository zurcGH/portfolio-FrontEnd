package com.portfolio.ag.Service;

import com.portfolio.ag.Entity.Skills;
import com.portfolio.ag.Repository.ISkills;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class SkillsService {
    @Autowired
    ISkills iSkills;
    
    public List<Skills> list(){
        return iSkills.findAll();
    }
    
    public Optional<Skills> getOne(int id){
        return iSkills.findById(id);
    }
    
    public Optional<Skills> getBySkill(String skill){
        return iSkills.findBySkill(skill);
    }
    
    public void save(Skills skill){
        iSkills.save(skill);
    }
    
    public void delete(int id){
        iSkills.deleteById(id);
    }
    
    public boolean existsById(int id){
        return iSkills.existsById(id);
    }
    
    public boolean existsBySkill(String skill){
        return iSkills.existsBySkill(skill);
    }
}
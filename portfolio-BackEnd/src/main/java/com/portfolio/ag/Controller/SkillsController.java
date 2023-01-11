package com.portfolio.ag.Controller;

import com.portfolio.ag.Dto.SkillsDto;
import com.portfolio.ag.Entity.Skills;
import com.portfolio.ag.Security.Controller.Message;
import com.portfolio.ag.Service.SkillsService;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "https://mgbfrontend.web.app")
@RequestMapping("/skill")
public class SkillsController {

    @Autowired
    SkillsService skillsService;

    @GetMapping("/list")
    public ResponseEntity<List<Skills>> list() {
        List<Skills> list = skillsService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<Skills> getById(@PathVariable("id") int id) {
        if (!skillsService.existsById(id)) {
            return new ResponseEntity(new Message("ID doesn't exist"), HttpStatus.NOT_FOUND);
        }
        Skills skills = skillsService.getOne(id).get();
        return new ResponseEntity(skills, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!skillsService.existsById(id)) {
            return new ResponseEntity(new Message("ID doesn't exist"), HttpStatus.NOT_FOUND);
        }
        skillsService.delete(id);
        return new ResponseEntity(new Message("Skill deleted succesfully"), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody SkillsDto skillsDto) {
        if (StringUtils.isBlank(skillsDto.getSkill())) {
            return new ResponseEntity(new Message("Skill name if mandatory"), HttpStatus.BAD_REQUEST);
        }
        if (skillsService.existsBySkill(skillsDto.getSkill())) {
            return new ResponseEntity(new Message("Skill already exists"), HttpStatus.BAD_REQUEST);
        }

        Skills skills = new Skills(skillsDto.getSkill(), skillsDto.getPercentage());
        skillsService.save(skills);

        return new ResponseEntity(new Message("Skill added succesfully"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody SkillsDto skillsDto) {
        
        if (!skillsService.existsById(id)) {
            return new ResponseEntity(new Message("ID doesn't exist"), HttpStatus.BAD_REQUEST);
        }
        
        if (skillsService.existsBySkill(skillsDto.getSkill()) && skillsService.getBySkill(skillsDto.getSkill()).get().getId() != id) {
            return new ResponseEntity(new Message("Skill already exists"), HttpStatus.BAD_REQUEST);
        }
        
        if (StringUtils.isBlank(skillsDto.getSkill())) {
            return new ResponseEntity(new Message("Skill name if mandatory"), HttpStatus.BAD_REQUEST);
        }

        Skills skills = skillsService.getOne(id).get();
        skills.setSkill(skillsDto.getSkill());
        skills.setPercentage(skillsDto.getPercentage());

        skillsService.save(skills);
        return new ResponseEntity(new Message("Skill updated succesfully"), HttpStatus.OK);
    }
}
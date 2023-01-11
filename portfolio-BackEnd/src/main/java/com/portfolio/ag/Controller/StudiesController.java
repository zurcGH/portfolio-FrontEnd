package com.portfolio.ag.Controller;

import com.portfolio.ag.Dto.StudiesDto;
import com.portfolio.ag.Entity.Studies;
import com.portfolio.ag.Security.Controller.Message;
import com.portfolio.ag.Service.StudiesService;
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
@RequestMapping("/study")
@CrossOrigin(origins = "http://localhost:4200/")
public class StudiesController {
    @Autowired
    StudiesService studiesService;
    
    @GetMapping("/list")
    public ResponseEntity<List<Studies>> list(){
        List<Studies> list = studiesService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/details/{id}")
    public ResponseEntity<Studies> getById(@PathVariable("id") int id){
        if(!studiesService.existsById(id))
            return new ResponseEntity(new Message("Studies doesn't exist"), HttpStatus.NOT_FOUND);
        Studies studies = studiesService.getOne(id).get();
        return new ResponseEntity(studies, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!studiesService.existsById(id)) {
            return new ResponseEntity(new Message("\"Studies doesn't exist\""), HttpStatus.NOT_FOUND);
        }
        studiesService.delete(id);
        return new ResponseEntity(new Message("Studies deleted succesfully"), HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody StudiesDto studiesDto){      
        if(StringUtils.isBlank(studiesDto.getStudyName()))
            return new ResponseEntity(new Message("StudiesName is mandatory"), HttpStatus.BAD_REQUEST);
        if(studiesService.existsByStudyName(studiesDto.getStudyName()))
            return new ResponseEntity(new Message("Studies exists"), HttpStatus.BAD_REQUEST);
        
        Studies studies = new Studies(studiesDto.getStudyName(), studiesDto.getStudyInfo());
        studiesService.save(studies);
        
        return new ResponseEntity(new Message("Studies added succesfully"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody StudiesDto studiesDto){
        if(!studiesService.existsById(id))
            return new ResponseEntity(new Message("ID doesn't exist"), HttpStatus.BAD_REQUEST);
        if(studiesService.existsByStudyName(studiesDto.getStudyName()) && studiesService.getByStudyName(studiesDto.getStudyName()).get().getId() != id)
            return new ResponseEntity(new Message("Studies already exists"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(studiesDto.getStudyName()))
            return new ResponseEntity(new Message("StudiesName is mandatory"), HttpStatus.BAD_REQUEST);
        
        Studies studies = studiesService.getOne(id).get();
        studies.setStudyName(studiesDto.getStudyName());
        studies.setStudyInfo((studiesDto.getStudyInfo()));
        
        studiesService.save(studies);
        return new ResponseEntity(new Message("Studies updated succesfully"), HttpStatus.OK);    
    }
}
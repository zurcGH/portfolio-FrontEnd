package com.portfolio.ag.Controller;

import com.portfolio.ag.Dto.WorkExpDto;
import com.portfolio.ag.Entity.WorkExp;
import com.portfolio.ag.Security.Controller.Message;
import com.portfolio.ag.Service.WorkExpService;
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
@RequestMapping("/workexp")
@CrossOrigin(origins = "http://localhost:4200/")
public class WorkExpController {
    @Autowired
    WorkExpService workExpService;
    
    @GetMapping("/list")
    public ResponseEntity<List<WorkExp>> list(){
        List<WorkExp> list = workExpService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<WorkExp> getById(@PathVariable("id") int id){
        if(!workExpService.existsById(id))
            return new ResponseEntity(new Message("WorkExp doesn't exist"), HttpStatus.NOT_FOUND);
        WorkExp workExp = workExpService.getOne(id).get();
        return new ResponseEntity(workExp, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!workExpService.existsById(id)) {
            return new ResponseEntity(new Message("\"WorkExp doesn't exist\""), HttpStatus.NOT_FOUND);
        }
        workExpService.delete(id);
        return new ResponseEntity(new Message("WorkExp deleted succesfully"), HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody WorkExpDto workExpDto){      
        if(StringUtils.isBlank(workExpDto.getWorkName()))
            return new ResponseEntity(new Message("WorkName is mandatory"), HttpStatus.BAD_REQUEST);
        if(workExpService.existsByWorkName(workExpDto.getWorkName()))
            return new ResponseEntity(new Message("WorkExp exists"), HttpStatus.BAD_REQUEST);
        
        WorkExp workExp = new WorkExp(workExpDto.getWorkName(), workExpDto.getWorkInfo());
        workExpService.save(workExp);
        
        return new ResponseEntity(new Message("WorkExp added succesfully"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody WorkExpDto workExpDto){
        if(!workExpService.existsById(id))
            return new ResponseEntity(new Message("ID doesn't exist"), HttpStatus.BAD_REQUEST);
        if(workExpService.existsByWorkName(workExpDto.getWorkName()) && workExpService.getByWorkName(workExpDto.getWorkName()).get().getId() != id)
            return new ResponseEntity(new Message("WorkExp already exists"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(workExpDto.getWorkName()))
            return new ResponseEntity(new Message("WorkName is mandatory"), HttpStatus.BAD_REQUEST);
        
        WorkExp workExp = workExpService.getOne(id).get();
        workExp.setWorkName(workExpDto.getWorkName());
        workExp.setWorkInfo((workExpDto.getWorkInfo()));
        
        workExpService.save(workExp);
        return new ResponseEntity(new Message("WorkExp updated succesfully"), HttpStatus.OK);    
    }
}
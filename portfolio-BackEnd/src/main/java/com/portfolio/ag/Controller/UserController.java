package com.portfolio.ag.Controller;

import com.portfolio.ag.Dto.UserDto;
import com.portfolio.ag.Entity.User;
import com.portfolio.ag.Security.Controller.Message;
import com.portfolio.ag.Service.ImpUserService;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    ImpUserService impUserService;
    
    @GetMapping("/list")
    public ResponseEntity<List<User>> list(){
        List<User> list = impUserService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/details/{id}")
    public ResponseEntity<User> getById(@PathVariable("id") int id){
        if(!impUserService.existsById(id))
            return new ResponseEntity(new Message("User doesn't exist"), HttpStatus.NOT_FOUND);
        User user = impUserService.getOne(id).get();
        return new ResponseEntity(user, HttpStatus.OK);
    }
    
    /*@DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!impUserService.existsById(id)) {
            return new ResponseEntity(new Message("\"User doesn't exist\""), HttpStatus.NOT_FOUND);
        }
        impUserService.delete(id);
        return new ResponseEntity(new Message("User deleted succesfully"), HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody UserDto userDto){      
        if(StringUtils.isBlank(userDto.getName()))
            return new ResponseEntity(new Message("Name is mandatory"), HttpStatus.BAD_REQUEST);
        if(impUserService.existsByName(userDto.getName()))
            return new ResponseEntity(new Message("Name exists"), HttpStatus.BAD_REQUEST);
        
        User user = new User(userDto.getName(), userDto.getLastName(), userDto.getDescription(), userDto.getImg());
        impUserService.save(user);
        
        return new ResponseEntity(new Message("User added succesfully"), HttpStatus.OK);
    }*/
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody UserDto userDto){
        if(!impUserService.existsById(id))
            return new ResponseEntity(new Message("ID doesn't exist"), HttpStatus.BAD_REQUEST);
        if(impUserService.existsByName(userDto.getName()) && impUserService.getByName(userDto.getName()).get().getId() != id)
            return new ResponseEntity(new Message("User already exists"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(userDto.getName()))
            return new ResponseEntity(new Message("Name is mandatory"), HttpStatus.BAD_REQUEST);
        
        User user = impUserService.getOne(id).get();
        user.setName(userDto.getName());
        user.setLastName(userDto.getLastName());
        user.setAbout((userDto.getAbout()));
        user.setImg(userDto.getImg());
        
        impUserService.save(user);
        return new ResponseEntity(new Message("User updated succesfully"), HttpStatus.OK);    
    }
}

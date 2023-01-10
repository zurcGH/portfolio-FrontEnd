package com.portfolio.ag.Controller;

import com.portfolio.ag.Entity.User;
import com.portfolio.ag.Interface.IUserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired IUserService iuserService;
    
    @GetMapping ("/users/get")
    public List<User> getUser() {
        return iuserService.getUser();
    }
    
    @GetMapping ("users/get/profile")
    public User findUser(){
        return iuserService.findUser((long)3);
    }
    
    @PostMapping ("/users/create")
    public String createUser(@RequestBody User user) {
        iuserService.saveUser(user);
        return "User created succesfully";
    }
    
    @DeleteMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        iuserService.deleteUser(id);
        return "User deleted succesfully";
    }
    
    @PutMapping("/users/edit/{id}")
    public User editUser(@PathVariable Long id, 
                         @RequestParam("name") String newName,
                         @RequestParam("lastName") String newLastName,
                         @RequestParam("img") String newImg) {
        User user = iuserService.findUser(id);
        user.setName(newName);
        user.setLastName(newLastName);
        user.setImg(newImg);
        
        iuserService.saveUser(user);
        return user;
    }
}

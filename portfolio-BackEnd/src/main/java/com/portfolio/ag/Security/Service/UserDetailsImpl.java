package com.portfolio.ag.Security.Service;

import com.portfolio.ag.Security.Entity.User_security;
import com.portfolio.ag.Security.Entity.PrimaryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsImpl implements UserDetailsService{
    @Autowired
    UserService userService;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User_security user = userService.getByUserName(userName).get();
        return PrimaryUser.build(user);
    }
}
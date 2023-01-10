package com.portfolio.ag.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "Name too short or too long")
    private String name;
    
    @NotNull
    @Size(min = 1, max = 50, message = "Last Name too short or too long")
    private String lastName;
    
    @Size(min = 1, max = 50, message = "Image too short or too long")
    private String img;    
}

package com.portfolio.ag.Dto;

import javax.validation.constraints.NotBlank;

public class UserDto {
    @NotBlank
    private String name;
    @NotBlank
    private String lastName;
    @NotBlank
    private String about;
    @NotBlank
    private String img;

    public UserDto() {
    }

    public UserDto(String name, String lastName, String about, String img) {
        this.name = name;
        this.lastName = lastName;
        this.about = about;
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}

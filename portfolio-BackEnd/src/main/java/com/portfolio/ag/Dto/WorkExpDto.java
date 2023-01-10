package com.portfolio.ag.Dto;

import javax.validation.constraints.NotBlank;

public class WorkExpDto {
    @NotBlank
    private String workName;
    @NotBlank
    private String workInfo;
    
    //Constructors
    public WorkExpDto() {
    }

    public WorkExpDto(String workName, String workInfo) {
        this.workName = workName;
        this.workInfo = workInfo;
    }
    
    //Getters - Setters
    public String getWorkName() {
        return workName;
    }

    public void setWorkName(String workName) {
        this.workName = workName;
    }

    public String getWorkInfo() {
        return workInfo;
    }

    public void setWorkInfo(String workInfo) {
        this.workInfo = workInfo;
    }
}
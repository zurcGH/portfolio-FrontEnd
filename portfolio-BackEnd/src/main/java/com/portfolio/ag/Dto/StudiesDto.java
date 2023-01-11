package com.portfolio.ag.Dto;

import javax.validation.constraints.NotBlank;

public class StudiesDto {
    @NotBlank
    private String studyName;
    @NotBlank
    private String studyInfo;
    
    //Constructors
    public StudiesDto() {
    }

    public StudiesDto(String studyName, String studyInfo) {
        this.studyName = studyName;
        this.studyInfo = studyInfo;
    }
    
    //Getters - Setters
    public String getStudyName() {
        return studyName;
    }

    public void setStudyName(String studyName) {
        this.studyName = studyName;
    }

    public String getStudyInfo() {
        return studyInfo;
    }

    public void setStudyInfo(String studyInfo) {
        this.studyInfo = studyInfo;
    }
}
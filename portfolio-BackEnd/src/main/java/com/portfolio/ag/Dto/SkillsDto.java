package com.portfolio.ag.Dto;

import javax.validation.constraints.NotBlank;


public class SkillsDto {
    @NotBlank
    private String skill;
    @NotBlank
    private int percentage;

    public SkillsDto() {
    }

    public SkillsDto(String skill, int percentage) {
        this.skill = skill;
        this.percentage = percentage;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }
}
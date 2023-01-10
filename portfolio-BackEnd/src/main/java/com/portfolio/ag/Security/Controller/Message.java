package com.portfolio.ag.Security.Controller;

public class Message {
    private String message;
    
    //Constructor
    public Message() {
    }

    public Message(String message) {
        this.message = message;
    }
    
    //Getter - Setter
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    
}
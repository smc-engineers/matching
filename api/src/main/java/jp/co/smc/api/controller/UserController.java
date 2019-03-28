package jp.co.smc.api.controller;

import jp.co.smc.api.document.User;
import jp.co.smc.api.repository.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserDAO userDAO;
    @RequestMapping("/all")
    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }
    @RequestMapping(value = "/new", method = RequestMethod.POST)
    public User addUsers(@RequestBody User user) {
        userDAO.addNewUser(user);
        return user;
    }
}
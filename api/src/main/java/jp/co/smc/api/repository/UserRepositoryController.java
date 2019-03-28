package jp.co.smc.api.repository;

import jp.co.smc.api.document.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/repo")
public class UserRepositoryController {
    @Autowired
    private UserRepository userRepository;
    @RequestMapping("/all")
    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }
    //Other methods
}
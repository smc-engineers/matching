package jp.co.smc.api.repository;

import jp.co.smc.api.document.User;

import java.util.List;

public interface UserDAO {
    List<User> getAllUsers();
    User addNewUser(User user);
}

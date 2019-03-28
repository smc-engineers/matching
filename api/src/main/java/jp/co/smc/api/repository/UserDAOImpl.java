package jp.co.smc.api.repository;

import jp.co.smc.api.document.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

import static org.elasticsearch.index.query.QueryBuilders.matchAllQuery;

@Repository
public class UserDAOImpl implements UserDAO {
//    private final Logger LOG = LoggerFactory.getLogger(getClass());
    @Value("${elasticsearch.index.name}")
    private String indexName;
    @Value("${elasticsearch.user.type}")
    private String userTypeName;
    @Autowired
    private ElasticsearchTemplate esTemplate;
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<User> getAllUsers() {
        SearchQuery getAllQuery = new NativeSearchQueryBuilder()
                .withQuery(matchAllQuery()).build();
        return esTemplate.queryForList(getAllQuery, User.class);
    }
    @Override
    public User addNewUser(User user) {
        userRepository.save(user);
        return user;
    }
}
package net.moba92.app.repository;

import net.moba92.app.domain.Poll;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Poll entity.
 */
@SuppressWarnings("unused")
public interface PollRepository extends MongoRepository<Poll,String> {

}

package net.moba92.app.repository;

import net.moba92.app.domain.Vote;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Vote entity.
 */
@SuppressWarnings("unused")
public interface VoteRepository extends MongoRepository<Vote,String> {

}

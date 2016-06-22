package net.moba92.app.repository;

import net.moba92.app.domain.Content;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Content entity.
 */
@SuppressWarnings("unused")
public interface ContentRepository extends MongoRepository<Content,String> {

}

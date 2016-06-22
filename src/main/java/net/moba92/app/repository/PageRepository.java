package net.moba92.app.repository;

import net.moba92.app.domain.Page;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Page entity.
 */
@SuppressWarnings("unused")
public interface PageRepository extends MongoRepository<Page,String> {

}

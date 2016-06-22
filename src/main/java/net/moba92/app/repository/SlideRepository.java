package net.moba92.app.repository;

import net.moba92.app.domain.Slide;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Slide entity.
 */
@SuppressWarnings("unused")
public interface SlideRepository extends MongoRepository<Slide,String> {

}

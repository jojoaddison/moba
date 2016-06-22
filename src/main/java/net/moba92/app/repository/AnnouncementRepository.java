package net.moba92.app.repository;

import net.moba92.app.domain.Announcement;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Announcement entity.
 */
@SuppressWarnings("unused")
public interface AnnouncementRepository extends MongoRepository<Announcement,String> {

}

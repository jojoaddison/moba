package net.moba92.app.repository;

import net.moba92.app.domain.Member;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Member entity.
 */
@SuppressWarnings("unused")
public interface MemberRepository extends MongoRepository<Member,String> {

}

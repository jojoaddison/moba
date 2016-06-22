package net.moba92.app.web.rest;

import com.codahale.metrics.annotation.Timed;
import net.moba92.app.domain.Vote;
import net.moba92.app.repository.VoteRepository;
import net.moba92.app.web.rest.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Vote.
 */
@RestController
@RequestMapping("/api")
public class VoteResource {

    private final Logger log = LoggerFactory.getLogger(VoteResource.class);
        
    @Inject
    private VoteRepository voteRepository;
    
    /**
     * POST  /votes : Create a new vote.
     *
     * @param vote the vote to create
     * @return the ResponseEntity with status 201 (Created) and with body the new vote, or with status 400 (Bad Request) if the vote has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/votes",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Vote> createVote(@RequestBody Vote vote) throws URISyntaxException {
        log.debug("REST request to save Vote : {}", vote);
        if (vote.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("vote", "idexists", "A new vote cannot already have an ID")).body(null);
        }
        Vote result = voteRepository.save(vote);
        return ResponseEntity.created(new URI("/api/votes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("vote", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /votes : Updates an existing vote.
     *
     * @param vote the vote to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated vote,
     * or with status 400 (Bad Request) if the vote is not valid,
     * or with status 500 (Internal Server Error) if the vote couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/votes",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Vote> updateVote(@RequestBody Vote vote) throws URISyntaxException {
        log.debug("REST request to update Vote : {}", vote);
        if (vote.getId() == null) {
            return createVote(vote);
        }
        Vote result = voteRepository.save(vote);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("vote", vote.getId().toString()))
            .body(result);
    }

    /**
     * GET  /votes : get all the votes.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of votes in body
     */
    @RequestMapping(value = "/votes",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Vote> getAllVotes() {
        log.debug("REST request to get all Votes");
        List<Vote> votes = voteRepository.findAll();
        return votes;
    }

    /**
     * GET  /votes/:id : get the "id" vote.
     *
     * @param id the id of the vote to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the vote, or with status 404 (Not Found)
     */
    @RequestMapping(value = "/votes/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Vote> getVote(@PathVariable String id) {
        log.debug("REST request to get Vote : {}", id);
        Vote vote = voteRepository.findOne(id);
        return Optional.ofNullable(vote)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /votes/:id : delete the "id" vote.
     *
     * @param id the id of the vote to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @RequestMapping(value = "/votes/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteVote(@PathVariable String id) {
        log.debug("REST request to delete Vote : {}", id);
        voteRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("vote", id.toString())).build();
    }

}

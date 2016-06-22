package net.moba92.app.web.rest;

import com.codahale.metrics.annotation.Timed;
import net.moba92.app.domain.Poll;
import net.moba92.app.repository.PollRepository;
import net.moba92.app.web.rest.util.HeaderUtil;
import net.moba92.app.web.rest.util.PaginationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
 * REST controller for managing Poll.
 */
@RestController
@RequestMapping("/api")
public class PollResource {

    private final Logger log = LoggerFactory.getLogger(PollResource.class);
        
    @Inject
    private PollRepository pollRepository;
    
    /**
     * POST  /polls : Create a new poll.
     *
     * @param poll the poll to create
     * @return the ResponseEntity with status 201 (Created) and with body the new poll, or with status 400 (Bad Request) if the poll has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/polls",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Poll> createPoll(@RequestBody Poll poll) throws URISyntaxException {
        log.debug("REST request to save Poll : {}", poll);
        if (poll.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("poll", "idexists", "A new poll cannot already have an ID")).body(null);
        }
        Poll result = pollRepository.save(poll);
        return ResponseEntity.created(new URI("/api/polls/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("poll", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /polls : Updates an existing poll.
     *
     * @param poll the poll to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated poll,
     * or with status 400 (Bad Request) if the poll is not valid,
     * or with status 500 (Internal Server Error) if the poll couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/polls",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Poll> updatePoll(@RequestBody Poll poll) throws URISyntaxException {
        log.debug("REST request to update Poll : {}", poll);
        if (poll.getId() == null) {
            return createPoll(poll);
        }
        Poll result = pollRepository.save(poll);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("poll", poll.getId().toString()))
            .body(result);
    }

    /**
     * GET  /polls : get all the polls.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of polls in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @RequestMapping(value = "/polls",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<Poll>> getAllPolls(Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Polls");
        Page<Poll> page = pollRepository.findAll(pageable); 
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/polls");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /polls/:id : get the "id" poll.
     *
     * @param id the id of the poll to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the poll, or with status 404 (Not Found)
     */
    @RequestMapping(value = "/polls/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Poll> getPoll(@PathVariable String id) {
        log.debug("REST request to get Poll : {}", id);
        Poll poll = pollRepository.findOne(id);
        return Optional.ofNullable(poll)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /polls/:id : delete the "id" poll.
     *
     * @param id the id of the poll to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @RequestMapping(value = "/polls/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deletePoll(@PathVariable String id) {
        log.debug("REST request to delete Poll : {}", id);
        pollRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("poll", id.toString())).build();
    }

}

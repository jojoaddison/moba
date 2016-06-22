package net.moba92.app.web.rest;

import com.codahale.metrics.annotation.Timed;
import net.moba92.app.domain.Slide;
import net.moba92.app.repository.SlideRepository;
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
 * REST controller for managing Slide.
 */
@RestController
@RequestMapping("/api")
public class SlideResource {

    private final Logger log = LoggerFactory.getLogger(SlideResource.class);
        
    @Inject
    private SlideRepository slideRepository;
    
    /**
     * POST  /slides : Create a new slide.
     *
     * @param slide the slide to create
     * @return the ResponseEntity with status 201 (Created) and with body the new slide, or with status 400 (Bad Request) if the slide has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/slides",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Slide> createSlide(@RequestBody Slide slide) throws URISyntaxException {
        log.debug("REST request to save Slide : {}", slide);
        if (slide.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("slide", "idexists", "A new slide cannot already have an ID")).body(null);
        }
        Slide result = slideRepository.save(slide);
        return ResponseEntity.created(new URI("/api/slides/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("slide", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /slides : Updates an existing slide.
     *
     * @param slide the slide to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated slide,
     * or with status 400 (Bad Request) if the slide is not valid,
     * or with status 500 (Internal Server Error) if the slide couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/slides",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Slide> updateSlide(@RequestBody Slide slide) throws URISyntaxException {
        log.debug("REST request to update Slide : {}", slide);
        if (slide.getId() == null) {
            return createSlide(slide);
        }
        Slide result = slideRepository.save(slide);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("slide", slide.getId().toString()))
            .body(result);
    }

    /**
     * GET  /slides : get all the slides.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of slides in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @RequestMapping(value = "/slides",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<Slide>> getAllSlides(Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Slides");
        Page<Slide> page = slideRepository.findAll(pageable); 
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/slides");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /slides/:id : get the "id" slide.
     *
     * @param id the id of the slide to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the slide, or with status 404 (Not Found)
     */
    @RequestMapping(value = "/slides/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Slide> getSlide(@PathVariable String id) {
        log.debug("REST request to get Slide : {}", id);
        Slide slide = slideRepository.findOne(id);
        return Optional.ofNullable(slide)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /slides/:id : delete the "id" slide.
     *
     * @param id the id of the slide to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @RequestMapping(value = "/slides/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteSlide(@PathVariable String id) {
        log.debug("REST request to delete Slide : {}", id);
        slideRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("slide", id.toString())).build();
    }

}

package net.moba92.app.web.rest;

import com.codahale.metrics.annotation.Timed;
import net.moba92.app.domain.Page;
import net.moba92.app.repository.PageRepository;
import net.moba92.app.web.rest.util.HeaderUtil;
import net.moba92.app.web.rest.util.PaginationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
 * REST controller for managing Page.
 */
@RestController
@RequestMapping("/api")
public class PageResource {

    private final Logger log = LoggerFactory.getLogger(PageResource.class);
        
    @Inject
    private PageRepository pageRepository;
    
    /**
     * POST  /pages : Create a new page.
     *
     * @param page the page to create
     * @return the ResponseEntity with status 201 (Created) and with body the new page, or with status 400 (Bad Request) if the page has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/pages",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Page> createPage(@RequestBody Page page) throws URISyntaxException {
        log.debug("REST request to save Page : {}", page);
        if (page.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("page", "idexists", "A new page cannot already have an ID")).body(null);
        }
        Page result = pageRepository.save(page);
        return ResponseEntity.created(new URI("/api/pages/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("page", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /pages : Updates an existing page.
     *
     * @param page the page to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated page,
     * or with status 400 (Bad Request) if the page is not valid,
     * or with status 500 (Internal Server Error) if the page couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/pages",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Page> updatePage(@RequestBody Page page) throws URISyntaxException {
        log.debug("REST request to update Page : {}", page);
        if (page.getId() == null) {
            return createPage(page);
        }
        Page result = pageRepository.save(page);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("page", page.getId().toString()))
            .body(result);
    }

    /**
     * GET  /pages : get all the pages.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of pages in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @RequestMapping(value = "/pages",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<Page>> getAllPages(Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Pages");
        org.springframework.data.domain.Page<Page> page = pageRepository.findAll(pageable); 
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/pages");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /pages/:id : get the "id" page.
     *
     * @param id the id of the page to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the page, or with status 404 (Not Found)
     */
    @RequestMapping(value = "/pages/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Page> getPage(@PathVariable String id) {
        log.debug("REST request to get Page : {}", id);
        Page page = pageRepository.findOne(id);
        return Optional.ofNullable(page)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /pages/:id : delete the "id" page.
     *
     * @param id the id of the page to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @RequestMapping(value = "/pages/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deletePage(@PathVariable String id) {
        log.debug("REST request to delete Page : {}", id);
        pageRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("page", id.toString())).build();
    }

}

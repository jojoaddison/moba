package net.moba92.app.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A Gallery.
 */

@Document(collection = "gallery")
public class Gallery implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("slides")
    private Set<Slide> slides = new HashSet<>();

    @Field("name")
    private String name;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Set<Slide> getSlides() {
        return slides;
    }

    public void setSlides(Set<Slide> slides) {
        this.slides = slides;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Gallery gallery = (Gallery) o;
        if(gallery.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, gallery.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Gallery{" +
            "id=" + id +
            ", slides='" + slides + "'" +
            ", name='" + name + "'" +
            '}';
    }
}

package net.moba92.app.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Slide.
 */

@Document(collection = "slide")
public class Slide implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("url")
    private String url;

    @Field("title")
    private String title;

    @Field("sub_title")
    private String subTitle;

    @Field("description")
    private String description;

    @Field("gallery")
    private String gallery;
    
    @Field("inner_slide")
    private String innerSlide;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getInnerSlide() {
		return innerSlide;
	}

	public void setSlide(String slideId) {
		this.innerSlide = slideId;
	}

	public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGallery() {
        return gallery;
    }

    public void setGallery(String gallery) {
        this.gallery = gallery;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Slide slide = (Slide) o;
        if(slide.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, slide.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Slide{" +
            "id=" + id +
            ", url='" + url + "'" +
            ", title='" + title + "'" +
            ", subTitle='" + subTitle + "'" +
            ", description='" + description + "'" +
            ", gallery='" + gallery + "'" +
            '}';
    }
}

package net.moba92.app.web.rest.dto;

import java.io.Serializable;
import java.util.Objects;


/**
 * A DTO for the Member entity.
 */
public class MemberDTO implements Serializable {

    private String id;

    private String nickname;

    private String photo;

    private String mobilePhone;

    private String email;

    private String album;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        MemberDTO memberDTO = (MemberDTO) o;

        if ( ! Objects.equals(id, memberDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "MemberDTO{" +
            "id=" + id +
            ", nickname='" + nickname + "'" +
            ", photo='" + photo + "'" +
            ", mobilePhone='" + mobilePhone + "'" +
            ", email='" + email + "'" +
            ", album='" + album + "'" +
            '}';
    }
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";
import {Link} from "react-router-dom";

const FavoritedUser = (props) => {
  const [fave, setFave] = useState(null);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `${apiUrl}/users/${props.match.params.id}`
        );
        setFave(response.data.user);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  if (!fave) {
    return <h2>Loading your favorite...</h2>;
  } else {
    return (
      <div className="favorited-user">
        <div>
          <img src={fave.image} alt="profile-pic" />
          <p className="first-name">{fave.firstName}</p>
          <p className="user-age">{fave.age} years old</p>
          <p className="user-location">{fave.location}</p>
          <div className="hobbies-before">
            <p>
              <span>Hobbies before COVID</span>
              <br /> {fave.hobbiesBefore}
            </p>
          </div>
          <div className="hobbies-after">
            <p>
              <span>Hobbies after COVID</span>
              <br /> {fave.hobbiesAfter}
            </p>
          </div>
        </div>
        <div className="buttons">
            <Link to="/favorites">
          Back to your favorites
          </Link>
        </div>
      </div>
    );
  }
};

export default FavoritedUser;
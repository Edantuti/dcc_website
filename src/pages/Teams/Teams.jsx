import React from "react";
import "./teams.scss";
import { MDBBadge } from "mdbreact";
import teamData from "../../test_data/team-roles.json";
import "@fontsource/cabin";
import "@fontsource/montserrat";
import underline from './underline.svg';

export const Teams = () => {
    return (
      <>
      <div className="teams-page">

      <div className="underline-header">
        <span>Meet the Team</span>
        <img src={underline} alt='' />
      </div>

        <div className="team">
        <h4 className="heading-dark">
          Executive Team
        </h4>
        <div className="row1">
          {Object.keys(teamData).map((role) => {
            if (
              role === "president" ||
              role === "vice president" ||
              role === "general secretary" ||
              role === "event manager" ||
              role === "treasurer"
            ) {
              return teamData[role].map((roleObject) => {
                return (
                  <div className="card1">
                    <div className="photo">
                      <img alt="profile" className="cover"
                        src={roleObject.profile_pic}
                      />
                      <h6 className="profile-name">
                        {roleObject.name}
                      </h6>

                      <h6 className="profile-role">
                        {role.toUpperCase()}
                      </h6>
                      <br />
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>
      </div>

      <div className="team">
        <h4 className="heading-dark">
          Web Development Team
        </h4>
        <div className="row1">
          {Object.keys(teamData).map((role) => {
            if (
              role === "web"
            ) {
              return teamData[role].map((roleObject) => {
                return (
                  <div className="card1">
                    <div className="photo">
                      <img alt="profile" className="cover"
                        src={roleObject.profile_pic}
                      />
                      <h6 className="profile-name">
                        {roleObject.name}
                      </h6>

                      <h6 className="profile-role">
                        {roleObject.tags.toUpperCase()}
                      </h6>
                      <br />
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>
      </div>

      <div className="team">
        <h4 className="heading-dark">
          Android Development Team
        </h4>
        <div className="row1">
          {Object.keys(teamData).map((role) => {
            if (
              role === "android"
            ) {
              return teamData[role].map((roleObject) => {
                return (
                  <div className="card1">
                    <div className="photo">
                      <img alt="profile" className="cover"
                        src={roleObject.profile_pic}
                      />
                      <h6 className="profile-name">
                        {roleObject.name}
                      </h6>

                      <h6 className="profile-role">
                        {roleObject.tags.toUpperCase()}
                      </h6>
                      <br />
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>
      </div>

      <div className="team">
        <h4 className="heading-dark">
          Competitive Programming Team
        </h4>
        <div className="row1">
          {Object.keys(teamData).map((role) => {
            if (
              role === "cp"
            ) {
              return teamData[role].map((roleObject) => {
                return (
                  <div className="card1">
                    <div className="photo">
                      <img alt="profile" className="cover"
                        src={roleObject.profile_pic}
                      />
                      <h6 className="profile-name">
                        {roleObject.name}
                      </h6>

                      <h6 className="profile-role">
                        {roleObject.tags.toUpperCase()}
                      </h6>
                      <br />
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>
      </div>

      <div className="team">
        <h4 className="heading-dark">
          Data Structures and Algorithms Team
        </h4>
        <div className="row1">
          {Object.keys(teamData).map((role) => {
            if (
              role === "dsa"
            ) {
              return teamData[role].map((roleObject) => {
                return (
                  <div className="card1">
                    <div className="photo">
                      <img alt="profile" className="cover"
                        src={roleObject.profile_pic}
                      />
                      <h6 className="profile-name">
                        {roleObject.name}
                      </h6>

                      <h6 className="profile-role">
                        {roleObject.tags.toUpperCase()}
                      </h6>
                      <br />
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>
      </div>

      <div className="team">
        <h4 className="heading-dark">
          Machine Learning Team
        </h4>
        <div className="row1">
          {Object.keys(teamData).map((role) => {
            if (
              role === "ml"
            ) {
              return teamData[role].map((roleObject) => {
                return (
                  <div className="card1">
                    <div className="photo">
                      <img alt="profile" className="cover"
                        src={roleObject.profile_pic}
                      />
                      <h6 className="profile-name">
                        {roleObject.name}
                      </h6>

                      <h6 className="profile-role">
                        {roleObject.tags.toUpperCase()}
                      </h6>
                      <br />
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>
      </div>

      <div className="team">
        <h4 className="heading-dark">
          Social Media and Content Team
        </h4>
        <div className="row1">
          {Object.keys(teamData).map((role) => {
            if (
              role === "sm"
            ) {
              return teamData[role].map((roleObject) => {
                return (
                  <div className="card1">
                    <div className="photo">
                      <img alt="profile" className="cover"
                        src={roleObject.profile_pic}
                      />
                      <h6 className="profile-name">
                        {roleObject.name}
                      </h6>

                      <h6 className="profile-role">
                        {roleObject.tags.toUpperCase()}
                      </h6>
                      <br />
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>
      </div>

      </div>
    </>
    )
};
import React from "react";
import Profile from "../assets/images/Profile.jpeg";

const styles = {
  profileImage: {
    display: "flex",
    margin: "auto",
    width: "30%",
    height: "auto",
    borderRadius: "20px",
  },
  header: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  },
  p: {
    width: "60%",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  },
};

export default function About() {
  return (
    <div className="container">
      <h2 style={styles.header}>About Me</h2>
      <img
        src={Profile}
        style={styles.profileImage}
        alt="Profile Picture"
        className="profile-image"
      ></img>
      <p style={styles.p}>
        Hello! My name is Christyn Garcia and I am an aspiring Full Stack Software Developer! Please take a moment to look over some of my Projects and Assignments.
      </p>
    </div>
  );
}
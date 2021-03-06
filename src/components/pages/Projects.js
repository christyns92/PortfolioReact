import React from "react";
import Jobster from "../assets/images/Jobster.png";
import Stargazers from "../assets/images/Stargazers.png";
import WorkDay from "../assets/images/WorkDay.png";

const styles = {
  card: {
    width: "18rem",
    padding: "10px",
    margin: "10px",
  },
  header: {
    width: "75%",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  },
  p: {
    width: "60%",
    margin: "0 auto",
    textAlign: "center",
    padding: "10px",
  },
  cols: {
    width: "75%",
    margin: "0 auto",
    justifyContent: "center",
  },
};

export default function Portfolio() {
  return (
    <div className="container">
      <h2 style={styles.header}> My Projects </h2>{" "}
      <p style={styles.p}>
        Donec a volutpat quam.Curabitur nec varius justo, sed rutrum
        ligula.Curabitur pellentesque turpis sit amet eros iaculis, a mollis
        arcu dictum.Ut vel ante eget massa ornare placerat.Etiam nisl orci,
        finibus sodales volutpat et, hendrerit ut dolor.{" "}
      </p>{" "}
      <div style={styles.cols} className="row justify-content-around">
        <div className="col-4">
          <div className="card" style={styles.card}>
            <img src={Jobster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Jobster </h5>{" "}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card 's content.{" "}
              </p>{" "}
              <a href="Github" className="btn btn-primary">
                Live Deployment{" "}
              </a>{" "}
              <a href="Github" className="btn btn-primary">
                GitHub{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card" style={styles.card}>
            <img src={Stargazers} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Stargazers </h5>{" "}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card 's content.{" "}
              </p>{" "}
              <a href="Github" className="btn btn-primary">
                Live Deployment{" "}
              </a>{" "}
              <a href="Github" className="btn btn-primary">
                GitHub{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card" style={styles.card}>
            <img src={WorkDay} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Work Day Scheduler </h5>{" "}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card 's content.{" "}
              </p>{" "}
              <a href="Github" className="btn btn-primary">
                Live Deployment{" "}
              </a>{" "}
              <a href="Github" className="btn btn-primary">
                GitHub{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-4">
          <div className="card" style={styles.card}>
            <img src={Jobster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Jobster </h5>{" "}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card 's content.{" "}
              </p>{" "}
              <a href="Github" className="btn btn-primary">
                Live Deployment{" "}
              </a>{" "}
              <a href="Github" className="btn btn-primary">
                GitHub{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card" style={styles.card}>
            <img src={Stargazers} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Stargazers </h5>{" "}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card 's content.{" "}
              </p>{" "}
              <a href="Github" className="btn btn-primary">
                Live Deployment{" "}
              </a>{" "}
              <a href="Github" className="btn btn-primary">
                GitHub{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card" style={styles.card}>
            <img src={WorkDay} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> WorkDay Scheduler </h5>{" "}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card 's content.{" "}
              </p>{" "}
              <a href="Github" className="btn btn-primary">
                Live Deployment{" "}
              </a>{" "}
              <a href="Github" className="btn btn-primary">
                GitHub{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

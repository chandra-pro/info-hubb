import React from "react";
import "./WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src="https://s.yimg.com/fz/api/res/1.2/0GtBThkXya5zZvVl8VV__A--~C/YXBwaWQ9c3JjaGRkO2g9MTE2O3E9ODA7dz0yMDA-/https://www.bing.com/th?id=OIP.8LXSaY8p06NqTBinDmtPxAHaEV&w=200&h=116&rs=1&qlt=80&pid=3.1"
          alt=""
        />
       
        <div className="widget__contentTitle">
          <h5>Robotics Club(ARC)</h5>
          <p>Organize various competitions within the club such as project exhibitions, paper presentations, quizzes etc </p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://iiitkota.ac.in/static/media/incognito.30ca3a30.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>INCOGNITO CLUB</h5>
          <p>Official Cultural club of @iiitkotaoffice which helps to step over the fear and bring out the stage talent.</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://iiitkota.ac.in/static/media/odyssey.3f66d4b8.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>ODYSSEY</h5>
          <p>Official Literary Club of @iiitkotaoffice with a vision to diversify the way we catch a glimpse at literature..</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://iiitkota.ac.in/static/media/fitindia.e170401a.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>FIT INDIA CLUB</h5>
          <p>Official Fitness Club of IIIT Kota</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>CAPTURE CLUB</h5>
          <p>???????????????????????????????? ???????????????????????????????????????????? ???????????????? ???????? ???????????????? ????????????????</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://iiitkota.ac.in/static/media/codebase.e7678156.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>IIIT KOTA CODEBASE</h5>
          <p>https://iiitkota.ac.in/static/media/codebase.e7678156.png</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://iiitkota.ac.in/static/media/dsc.ba791cdd.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>DEVELOPER STUDENTS CLUB</h5>
          <p>DSC IIIT Kota, powered by Google Developers, is a diverse community to learn and grow in a learning environment. </p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
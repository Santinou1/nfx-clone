import React, { useEffect, useState } from "react";
import "./PlanScreen.css";
function PlanScreen() {
  return (
    <div className="PlanScreen">
      <div className="planScreen__plan">
        <div className="planScreen_info">
          <h5>Premium</h5>
          <h6>4k + HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="planScreen__plan">
        <div className="planScreen_info">
          <h5>Premium</h5>
          <h6>4k + HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="planScreen__plan">
        <div className="planScreen_info">
          <h5>Premium</h5>
          <h6>4k + HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default PlanScreen;

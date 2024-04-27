import React, { useEffect } from "react";
import "../Styles/StartModal.css";
import "bootstrap/dist/css/bootstrap.min.css";
function StartModal() {
  return (
    <div id="startUp" className="modalshow">
      <div id="startUp2" className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StartModal;

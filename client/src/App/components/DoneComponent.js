import React from "react";
import { Modal } from "react-bootstrap";
import colors from "../../config/colors";

function DoneComponent(props) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-w"
      style={{
        border: "none",
        // backgroundColor: colors.light2,
      }}
      centered
    >
      <img
        src={props.data.img}
        attr="status"
        style={{
          width: "120px",
          height: "120px",
          backgroundColor: colors.secondary2,
          border: "none",
          outline: "none",
        }}
      />
      {props.error.isError === true ? (
        <span
          style={{
            fontSize: "1em",
            color: colors.dark1,
            fontWeight: "500",
            textAlign: "center",
            backgroundColor: colors.light3,
          }}
        >
          {props.error.error}
        </span>
      ) : null}
    </Modal>
  );
}

export default DoneComponent;

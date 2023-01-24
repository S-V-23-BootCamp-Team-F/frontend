import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import Modal from "react-modal";

import Delete from "src/images/delete.svg";

const DetailModal = ({isOpen}:any) => {
    return (
        <ReactModal isOpen={isOpen}>
            <div>모달 입니다.</div>
        </ReactModal>
    );
};

export default DetailModal;
import { useContext } from "react";
import { CRUDContext } from "../../context/CRUDContext";
import Modal from "../Modal/Modal";
import DeletePost from "../DeletePost/DeletePost";

const ModalComponent = () => {
  const { state } = useContext(CRUDContext);

  if (!state.modalType) return null;

  switch (state.modalType) {
    case "add":
      return <Modal />;
    case "edit":
      return <Modal post={state.modalData} />;
    case "delete":
      return <DeletePost post={state.modalData} />;
    default:
      return null;
  }
};

export default ModalComponent;

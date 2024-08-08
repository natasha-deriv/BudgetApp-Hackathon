import { Modal } from "@deriv-com/ui";
import "./ReceiveMoneyModal.scss";
import { IoClose } from "react-icons/io5";
/**
 * @todo Add onClose function prop. Type would be Voidfunction
 */
type ReceiveModalProps = {
  isReceiveOpen: boolean;
  handleClose: VoidFunction;
};

/**
 * @todo Add close icon from quill icons and close the modal
 */
export const ReceiveMoneyModal = ({
  isReceiveOpen,
  handleClose,
}: ReceiveModalProps) => {
  return (
    <Modal className="receive-modal" isOpen={isReceiveOpen} ariaHideApp={false}>
      <div className="receive-money-title">
        <div>Receive</div>
        <IoClose className="cancel-icon" size={20} onClick={handleClose} />
      </div>
    </Modal>
  );
};

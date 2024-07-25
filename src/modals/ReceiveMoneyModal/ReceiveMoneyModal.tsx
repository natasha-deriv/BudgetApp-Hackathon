import { Modal } from "@deriv-com/ui";
import "./ReceiveMoneyModal.scss";

/**
 * @todo Add onClose function prop. Type would be Voidfunction
 */
type ReceiveModalProps = {
  isReceiveOpen: boolean;
};

/**
 * @todo Add close icon from quill icons and close the modal
 */
export const ReceiveMoneyModal = ({ isReceiveOpen }: ReceiveModalProps) => {
  return (
    <Modal className="receive-modal" isOpen={isReceiveOpen}>
      <div>bye</div>
    </Modal>
  );
};

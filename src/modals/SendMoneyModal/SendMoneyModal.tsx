import { Modal } from "@deriv-com/ui";
import "./SendMoneyModal.scss";
import { IoClose } from "react-icons/io5";

/**
 * 1. This is where the props are typed. Any new props, it needs to be added here.
 */
type SendMoneyModalProps = {
  isSendOpen: boolean;
  handleClose: VoidFunction;
};

/**
 * 1. Modal component has an isOpen props. isOpen needs to be passed to trigger the modal.
 * 2. To trigger the modal, a state is needed. State needs to be passed from parent.
 * 3. Added a prop called isOpen but since this is TypeScript, props need to be typed. Any new props, it needs to be added.
 */
export const SendMoneyModal = ({
  isSendOpen,
  handleClose,
}: SendMoneyModalProps) => {
  return (
    <Modal className="send-modal" isOpen={isSendOpen} ariaHideApp={false}>
      <div className="send-money-title">
        <div>Transfer</div>
        <IoClose className="cancel-icon" size={20} onClick={handleClose} />
      </div>
      <div className="buttons">
        <button type="submit" className="back-button">
          Back
        </button>
        <button type="submit" className="send-button">
          Send
        </button>
      </div>
    </Modal>
  );
};

import { Modal } from "@deriv-com/ui";
import "./SendMoneyModal.scss";

/**
 * 1. This where we typed the props. Any new props, we have to add it to here
 */
type SendMoneyModalProps = {
  isOpen: boolean;
};

/**
 * 1. Modal component has an isOpen props. We need to pass isOpen to trigger the modal.
 * 2. To trigger the modal we need a state. We need to pass the state from the parent.
 * 3. Added a prop called isOpen but since this is TypeScript, we need to type the props. Any new props, we have to add it.
 */
export const SendMoneyModal = ({ isOpen }: SendMoneyModalProps) => {
  return (
    <Modal className="send-modal" isOpen={isOpen}>
      <div> hello</div>
    </Modal>
  );
};

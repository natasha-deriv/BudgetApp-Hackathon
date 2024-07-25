import { Modal } from "@deriv-com/ui";
import "./SendMoneyModal.scss";

/**
 * 1. This is where the props are typed. Any new props, it needs to be added here.
 */
type SendMoneyModalProps = {
  isOpen: boolean;
};

/**
 * 1. Modal component has an isOpen props. isOpen needs to be passed to trigger the modal.
 * 2. To trigger the modal, a state is needed. State needs to be passed from parent.
 * 3. Added a prop called isOpen but since this is TypeScript, props need to be typed. Any new props, it needs to be added.
 */
export const SendMoneyModal = ({ isOpen }: SendMoneyModalProps) => {
  return (
    <Modal className="send-modal" isOpen={isOpen}>
      <div> hello</div>
    </Modal>
  );
};

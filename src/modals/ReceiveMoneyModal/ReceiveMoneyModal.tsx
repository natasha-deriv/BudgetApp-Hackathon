import { Modal } from "@deriv-com/ui";
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
    <Modal
      className="w-[400px] h-auto text-black rounded-lg p-2"
      isOpen={isReceiveOpen}
      ariaHideApp={false}
    >
      <div className="flex justify-between items-center">
        <div>Receive</div>
        <IoClose className="cursor-pointer" size={20} onClick={handleClose} />
      </div>
    </Modal>
  );
};

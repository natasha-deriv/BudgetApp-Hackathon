import { LabelPairedPlusLgBoldIcon } from "@deriv/quill-icons";
import { Fab } from "@mui/material";

type FloatingActionButtonProps = {
  handleOpen: VoidFunction;
};

export const FloatingActionButton = ({
  handleOpen,
}: FloatingActionButtonProps) => {
  return (
    <div className="bottom-14 right-0.5 fixed" onClick={handleOpen}>
      <Fab aria-label="add" size="medium" color="secondary">
        <LabelPairedPlusLgBoldIcon />
      </Fab>
    </div>
  );
};

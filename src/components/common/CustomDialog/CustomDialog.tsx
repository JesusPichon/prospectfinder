import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import type { ReactNode } from "react";

interface CustomDialogProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  onApply?: () => void;
  children: ReactNode;
  cancelText?: string;
  applyText?: string;
  showApply?: boolean;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  title = "Diálogo",
  onClose,
  onApply,
  children,
  cancelText = "Cancelar",
  applyText = "Aplicar",
  showApply = true,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <Button onClick={onClose}>{cancelText}</Button>
      {showApply && onApply && (
        <Button onClick={onApply} variant="contained">
          {applyText}
        </Button>
      )}
    </DialogActions>
  </Dialog>
);

export default CustomDialog;

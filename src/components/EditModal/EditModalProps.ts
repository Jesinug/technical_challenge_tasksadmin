export interface EditModalProps {
    open: boolean;
    name: string;
    id: number;
    priority: number;
    handleClose: () => void;
}
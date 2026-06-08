import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Certificate } from '@/lib/certificates';

interface CertificateDialogProps {
  certificate?: Certificate;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CertificateDialog({ certificate, open, onOpenChange }: CertificateDialogProps) {
  if (!certificate) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{certificate.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <img
            src={certificate.imageUrl}
            alt={certificate.name}
            className="w-full rounded-lg"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = certificate.fallbackImageUrl;
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
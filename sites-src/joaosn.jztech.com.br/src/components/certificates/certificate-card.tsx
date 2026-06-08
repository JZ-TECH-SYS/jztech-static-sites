import { Card, CardContent } from "@/components/ui/card";
import type { Certificate } from '@/lib/certificates';

interface CertificateCardProps {
  certificate: Certificate;
  onClick: () => void;
}

export function CertificateCard({ certificate, onClick }: CertificateCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
          <img
            src={certificate.imageUrl}
            alt={certificate.name}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = certificate.fallbackImageUrl;
            }}
          />
        </div>
        <h3 className="mt-2 text-center font-medium">{certificate.name}</h3>
      </CardContent>
    </Card>
  );
}
import { useState } from 'react';
import { certificates } from '@/lib/certificates';

export function useCertificateSelection() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const selectedCertificate = certificates.find(cert => cert.id === selectedCert);

  return {
    selectedCert,
    selectedCertificate,
    setSelectedCert,
  };
}
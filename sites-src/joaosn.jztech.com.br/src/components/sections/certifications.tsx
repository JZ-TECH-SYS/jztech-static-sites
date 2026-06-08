import { motion } from 'framer-motion';
import { CertificateCarousel } from '@/components/certificates/certificate-carousel';
import { CertificateDialog } from '@/components/certificates/certificate-dialog';
import { useCertificateSelection } from '@/hooks/use-certificate-selection';

export function Certifications() {
  const { selectedCert, selectedCertificate, setSelectedCert } = useCertificateSelection();

  return (
    <section id="certifications" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.h2 
          className="text-3xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certificações
        </motion.h2>
        
        <div className="w-full max-w-5xl mx-auto">
          <CertificateCarousel onSelect={setSelectedCert} />
        </div>
      </div>

      <CertificateDialog 
        certificate={selectedCertificate}
        open={!!selectedCert}
        onOpenChange={() => setSelectedCert(null)}
      />
    </section>
  );
}
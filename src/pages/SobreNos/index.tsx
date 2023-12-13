import { QuemSomos } from '../../components/SobreNos/QuemSomos';
import { NossaMissao } from '../../components/SobreNos/NossaMissao';
import { Oferta } from '../../components/SobreNos/Oferta';
import { PagamentoFacil } from '../../components/SobreNos/PagamentoFacil';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const SobreNos = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const quemSomosAnimation = useScrollAnimation();
  const nossaMissaoAnimation = useScrollAnimation();
  const ofertaAnimation = useScrollAnimation();
  const pagamentoFacilAnimation = useScrollAnimation();
  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={quemSomosAnimation.controls}
        ref={quemSomosAnimation.ref}
      >
        <QuemSomos />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={nossaMissaoAnimation.controls}
        ref={nossaMissaoAnimation.ref}
      >
        <NossaMissao />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={ofertaAnimation.controls}
        ref={ofertaAnimation.ref}
      >
        <Oferta />
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={pagamentoFacilAnimation.controls}
        ref={pagamentoFacilAnimation.ref}
      >
        <PagamentoFacil />
      </motion.div>
    </>
  );
};

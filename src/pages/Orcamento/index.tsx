import { OpcoesOrcamento } from '../../components/Orcamento/OpcoesOrcamento';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const Orcamento = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const opcoesOrcamentoAnimation = useScrollAnimation();
  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={opcoesOrcamentoAnimation.controls}
        ref={opcoesOrcamentoAnimation.ref}
      >
        <OpcoesOrcamento />
      </motion.div>
    </>
  );
};

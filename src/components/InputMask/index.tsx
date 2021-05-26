import React, { InputHTMLAttributes, useCallback } from 'react';

import { cep, currency, cpf, cnpj, fone } from './mask';

import { Container } from './styles.js';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: 'cep' | 'cnpj' | 'currency' | 'fone' | 'cpf';
  label?: string;
}

const InputMask: React.FC<InputProps> = ({ mask, label, ...props }) => {
  const handleMask = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if (mask === 'cep') {
      cep(e);
    }
    if (mask === 'cnpj') {
      cnpj(e);
    }
    if (mask === 'fone') {
      fone(e);
    }
    if (mask === 'currency') {
      currency(e);
    }
    if (mask === 'cpf') {
      cpf(e);
    }
  }, [mask]);

  return (
    <Container>
      {label && <span>{label}</span>}
      <input {...props} onKeyUp={handleMask} />
    </Container>
  );
}

export default InputMask;
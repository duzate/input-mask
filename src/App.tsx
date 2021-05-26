//Modules
import React, { useCallback, useState } from 'react';

//Components
import InputMask from './components/InputMask';
//Styles
import { Container } from './styles.js'
//
interface Usuario {
  cep: string;
  fone: string;
  cnpj: string;
  cpf: string;
  price: string;
}

const App: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario,
      [e.currentTarget.name]: e.currentTarget.value.replace(/\D/g, ''),
    }
    )
  }, [usuario])

  return (
    <Container>
      <InputMask name='fone' mask='fone' label='Fone' onChange={handleChange} />
      <InputMask name='cnpj' mask='cnpj' label='CNPJ' onChange={handleChange} />
      <InputMask name='cpf' mask='cpf' label='CPF' onChange={handleChange} />
      <InputMask name='cep' mask='cep' label='CEP' onChange={handleChange} />
      <InputMask name='price' mask='currency' label='R$' onChange={handleChange} />
      <button onClick={() => { console.log(usuario) }}></button>
    </Container>
  );
}

export default App;

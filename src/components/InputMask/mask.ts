import React from "react";

export const cep = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  e.currentTarget.value = value;
  return e;
}

export const currency = (e: React.FormEvent<HTMLInputElement>) => {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
  e.currentTarget.value = value;
  return e;
}

export const cnpj = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 18;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})/, '$1/$2')
  value = value.replace(/(\d{4})(\d{1,2})/, '$1-$2')
  value = value.replace(/(-\d{2})\d+?$/, '$1')
  e.currentTarget.value = value;
  return e;
}

export const cpf = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  value = value.replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2')
  value = value.replace(/(-\d{2})\d+?$/, '$1')
  e.currentTarget.value = value;
  return e;
}

export const fone = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 16;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  value = value.replace(/(\d{2})(\d{1})/, '($1) $2 ') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
  value = value.replace(/(\d{4})(\d{3})/, '$1-$2')

  e.currentTarget.value = value;
  return e;
}
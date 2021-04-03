import { parse as jsonToXml } from 'js2xmlparser';

async function convertObjToXml(deal) {
  const pedido = {
    cliente: {
      id: deal.cnpj,
      nome: deal.org_name,
      tipoPessoa: 'J',
      ie: 'ISENTO',
      contribuinte: '2',
      endereco: 'Rua test',
      numero: '122',
      bairro: 'Test',
      cep: '99.999-999',
      cidade: 'Fortaleza',
      uf: 'CE',
      fone: deal.person.phone[0].value,
      email: deal.person.email[0].value,
    },
    vendedor: deal.owner_name,
    itens: {
      item: [
        {
          codigo: '123',
          descricao: 'Taxa de adesão Meu troco',
          un: 'Un',
          qtde: '1',
          vlr_unit: deal.value,
        },
      ],
    },
    parcelas: {
      parcela: [
        {
          dias: 10,
          data: Date.now(),
          vlr: deal.value,
          obs: 'Pagamento no dinheiro',
          forma_pagamento: {
            id: 1,
          },
        },
      ],
    },
    obs: 'Pedido de serviço de adesão do cliente',
  };

  return jsonToXml('pedido', pedido);
}

export default convertObjToXml;

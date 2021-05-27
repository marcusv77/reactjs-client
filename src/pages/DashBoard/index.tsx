import React, {useState, useEffect} from 'react';
import {Container, Paragraph, Obs} from '../../components/global';
import {IClient, listClients} from '../../services/client';
import Table from '../../components/Table'

export default function Dashboard() {
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    async function handleList(){
      const list = await listClients();
      setClients(list);
    }
    handleList();
  }, [setClients]);

  //Remove it before testing
  const data = [
    {
      id: 1,
      name: "Marcus",
      address: "Rua da Prata",
      phone: "31 9 9677-5823",
      email: "marcusvsf@gmail.com",
      cpf: "161.365.886-83",
    },
    {
      id: 2,
      name: "Augusto",
      address: "Rua da Prata",
      phone: "31 9 9677-5823",
      email: "marcusvsf@gmail.com",
      cpf: "161.365.886-83",
    },
    {
      id: 3,
      name: "Igor",
      address: "Rua da Prata",
      phone: "31 9 9677-5823",
      email: "marcusvsf@gmail.com",
      cpf: "161.365.886-83",
    },
  ];

  return (
    <Container>
      <Paragraph>Seja bem vindo a plataforma!</Paragraph>
      <Obs>Obs: Clique em um cliente específico para viualizar sua informações completas.</Obs>
      <Table array={data} />
    </Container>
  );
}

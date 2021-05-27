import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {Edit, Remove} from '../../global'
import Column from '../Column';
import {IClient, deleteClient} from '../../../services/client';
import './styles.css';

interface PropsClient{
  client: IClient;
}

export default function LineContent({client}:PropsClient) {
  const history = useHistory();

  const handleView = useCallback(async (client:IClient)=> {
    history.push('/client', {client});
  },[history]);

  const handleEdit = useCallback(async (client:IClient)=> {
    history.push('/client', {client});
  },[history]);

  async function handleDelete(client: IClient){
    const clientDeleted = await deleteClient(client);
    alert("O cliente " + client.name + " (ID: " + clientDeleted + ") foi removido.")
    //update array
  }

  return (
    <div className="line">
      <button className="tableline" onClick={() => handleView(client)}>
        <Column name={client?.name} />
        <Column name={client?.email} className="hide" />
        <Column name={client?.phone} className="hide" />
      </button>
      <div className="icons">
        <button onClick={() => handleEdit(client)}><Edit /></button>
        <button onClick={() => handleDelete(client)}><Remove /></button>
      </div>
    </div>
  );
}

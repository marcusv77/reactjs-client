import React from 'react';
import {IClient} from '../../services/client';
import {Table} from '../global';
import Line from './Line';
import LabelLine from './LabelLine';

interface TableProps{
  array: IClient[];
}

export default function TableContent({array}:TableProps) {
  return (
    <Table>
      {array?.length !== 0 && <LabelLine />}
      {array.map((client) => (
        <Line key={client.id} client={client} />
      ))}
    </Table>
  );
}

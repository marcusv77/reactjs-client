import React from 'react';
import {Line, LabelLine, Label} from './styles';

export default function TableLabel() {
  const data = [
    {
      id: 1,
      topic: 'Nome',
      hide: false
    },
    {
      id: 2,
      topic: 'Email',
      hide: true
    },
    {
      id: 3,
      topic: 'Telefone',
      hide: true
    }
  ];

  return (
    <Line>
      <LabelLine>
        {data.map((item) => (
          <Label key={item.id}>
            {(item.hide?
             <p className="hide">{item.topic}</p>
             :
             <p>{item.topic}</p>
            )}
          </Label>
        ))}
      </LabelLine>
    </Line>
  );
}

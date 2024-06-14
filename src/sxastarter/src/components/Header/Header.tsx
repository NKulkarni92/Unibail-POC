import React from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
interface Fields {
  SomeText: Field<string>;
} 

type HeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};
console.log('Inside Header Tsx');

export const Default = (props: HeaderProps): JSX.Element => {
 
  return (
    <div className={`component customcomponent1 ${props.params.styles}`}>
      <div className="component-content">
        <div>
          <Text field={props.fields.SomeText} />
        </div>
      </div>
    </div>
  );
};
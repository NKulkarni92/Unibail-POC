import { ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type HeaderProps = {
  fields: Fields;
};

export type MenuItem ={
  link: LinkField;
}

interface Fields {
  logo: ImageField;
  navigationItem: Array<Fields>;

}
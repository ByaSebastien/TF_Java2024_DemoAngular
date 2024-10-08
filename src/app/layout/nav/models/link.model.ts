export interface LinkModel {

  title: string;
  url?: string;
  children?: LinkModel[];
  isChildrenVisible?: boolean;
}

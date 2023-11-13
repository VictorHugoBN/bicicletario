export class Routes {
  public static enum = {
    Home: 'home',
    SobreNos: 'sobreNos',
    Orcamento: 'orcamento',
    FaleConosco: 'faleConosco',
  } as const;
  public static label = {
    [this.enum.Home]: 'Home',
    [this.enum.SobreNos]: 'Sobre Nós',
    [this.enum.Orcamento]: 'Orçamento',
    [this.enum.FaleConosco]: 'Fale Conosco',
  };
  public static values = Object.values(this.enum);
  public static getLabel(
    value: (typeof Routes.enum)[keyof typeof Routes.enum],
  ) {
    return this.label[value];
  }
}

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: {
      title: {
        color: string;
      };
      desc: {
        color: string;
        fz: string;
      };
    };
  }
}

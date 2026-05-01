import * as runtime from "react/jsx-runtime";
import { Video } from "./video";
import { Figure } from "./figure";
import { Callout } from "./callout";
import { Steps, Step } from "./steps";
import { Compare, CompareItem } from "./compare";
import { TechStack } from "./tech-stack";
import { CaseDiagram } from "./case-diagram";

const sharedComponents = {
  Video,
  Figure,
  Callout,
  Steps,
  Step,
  Compare,
  CompareItem,
  TechStack,
  CaseDiagram,
};

// Velite emits compiled MDX as a function string. This helper turns that into
// a React component using the runtime jsx factory.
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

export function MDXContent({
  code,
  components,
}: {
  code: string;
  components?: Record<string, React.ComponentType<unknown>>;
}) {
  const Component = useMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
}

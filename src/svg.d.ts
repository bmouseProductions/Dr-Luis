declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
}

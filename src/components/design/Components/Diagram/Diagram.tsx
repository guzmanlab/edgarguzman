import React, { type FC } from 'react';

type Props = {
    size: string;
    content: string;
};

const Diagram: FC<Props> = ({ size, content }) => {
    return (
        <div className={`max-w-7xl mx-auto diagram ${size}`}>
            Hello <s>Tailwind,</s> Typescript, Next, and Storybook!
            {content}
        </div>
    );
};

export default Diagram;

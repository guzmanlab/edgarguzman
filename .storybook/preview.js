import '../src/styles/wireframe.scss';
import { globalDecorators } from './decorators';
const config = require('../src/lib/config/index.js');

// import * as NextImage from 'next/image';

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(nextImage, 'default', {
//     configurable: true,
//     value: props => <OriginalNextImage {...props} unoptimized />
// });

export const parameters = {
    ...config.env.storybook.STORYBOOK_PREVIEW,
};

export const decorators = globalDecorators;

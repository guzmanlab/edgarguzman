import { DecoratorFn } from '@storybook/react';

export const withMaxWidth: DecoratorFn = StoryFn => {
    return (
        <div style={{ color: 'inherit', maxWidth: 400, margin: 'auto', outline: '0.0625rem solid', borderRadius: '0.125rem' }}>
            <StoryFn />
        </div>
    );
};

export const globalDecorators = [withMaxWidth];

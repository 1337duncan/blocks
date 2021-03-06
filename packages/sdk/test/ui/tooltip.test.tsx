import React from 'react';
import {mount} from 'enzyme';
import {Tooltip, Text} from '../../src/ui/ui';

describe('Tooltip', () => {
    it('renders outside of a blocks context', () => {
        mount(
            <Tooltip content="tooltip content">
                <Text>wrapped content</Text>
            </Tooltip>,
        );
    });
});

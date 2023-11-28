import type { ComponentProps } from 'react';

import Heading from './heading';
import Paragraph from './paragraph';
import Divider from './divider';

export const components = {
	h2: (props: Omit<ComponentProps<typeof Heading>, 'as'>) => <Heading as="h2" {...props} />,
	h3: (props: Omit<ComponentProps<typeof Heading>, 'as'>) => <Heading as="h3" {...props} />,
	h4: (props: Omit<ComponentProps<typeof Heading>, 'as'>) => <Heading as="h4" {...props} />,
	h5: (props: Omit<ComponentProps<typeof Heading>, 'as'>) => <Heading as="h5" {...props} />,
	p: Paragraph,
	hr: Divider
};

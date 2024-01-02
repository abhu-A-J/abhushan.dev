import type { ComponentProps } from 'react';

import Heading from './heading';
import Paragraph from './paragraph';
import Divider from './divider';

type PolymorphicHeadingProps = Omit<ComponentProps<typeof Heading>, 'as'>;

export const components = {
	h2: (props: PolymorphicHeadingProps) => <Heading as="h2" {...props} />,
	h3: (props: PolymorphicHeadingProps) => <Heading as="h3" {...props} />,
	h4: (props: PolymorphicHeadingProps) => <Heading as="h4" {...props} />,
	h5: (props: PolymorphicHeadingProps) => <Heading as="h5" {...props} />,
	p: Paragraph,
	hr: Divider
};

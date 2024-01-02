import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'a'> & {
	title: string;
};

function InternalLink({ href, children, ...otherProps }: Props) {
	return (
		<a href={href} className="inline-flex items-center gap-1 text-gray-11 underline hover:text-gray-12" {...otherProps}>
			{children}
		</a>
	);
}

export default InternalLink;

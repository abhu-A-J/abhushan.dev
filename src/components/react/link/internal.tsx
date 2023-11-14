import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'a'>;

function InternalLink({ href, children, ...otherProps }: Props) {
	return (
		<a href={href} className="text-gray-11 hover:text-gray-12 inline-flex items-center gap-1 underline" {...otherProps}>
			{children}
		</a>
	);
}

export default InternalLink;

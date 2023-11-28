import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'hr'>;

function Divider(props: Props) {
	return <hr className="bg-gray-6 border-none h-px my-4" {...props} />;
}

export default Divider;

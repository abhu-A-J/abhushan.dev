type Props = {
	title: string;
	publishedDate: Date;
	totalViews?: number;
};

function BlogHeader({ title, publishedDate, totalViews }: Props) {
	const publishedDateString = publishedDate.toDateString();

	return (
		<header className="mb-8 border-b-2 border-gray-6 pb-3">
			<h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
			<p className="mt-2 flex flex-wrap items-center justify-between gap-2 text-sm">
				<time dateTime={publishedDateString}>{publishedDateString}</time>
				{totalViews && <span>{totalViews}</span>}
			</p>
		</header>
	);
}

export default BlogHeader;

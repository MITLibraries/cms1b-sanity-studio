export default {
	name: 'alert',
	title: 'Alert',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime'
		}
	],
	preview: {
		select: {
			title: 'title'
		}
	}
}

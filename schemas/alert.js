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
			name: 'description',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'startAt',
			title: 'Alert Starts At',
			type: 'datetime'
		},
		{
			name: 'endsAt',
			title: 'Alert Ends At',
			type: 'datetime'
		},
		{
			name: 'sitewide',
			title: 'Show Alert Sitewide',
			type: 'boolean'
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

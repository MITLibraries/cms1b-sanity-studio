export default {
	name: 'alert',
	title: 'Alert',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			description: 'The headline of the alert',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			description: 'A longer statement of the alert, providing context',
			type: 'text'
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
		}
	],
	preview: {
		select: {
			title: 'title'
		}
	}
}

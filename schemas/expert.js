export default {
	name: 'expert',
	title: 'Expert',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			description: 'The displayed name of the expert',
			type: 'string'
		},
		{
			name: 'sortname',
			title: 'Sorted Name',
			description: 'The name used for displaying experts in a sorted list - perhaps a last name',
			type: 'string'
		},
		{
			name: 'title',
			title: 'Title',
			description: 'The person-facing title for our expert - rather than an HR classification',
			type: 'string'
		},
		{
			name: 'phone',
			title: 'Phone number',
			description: 'The formatted phone number to use for contacting this expert',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			description: 'A short bio or description of the expert',
			type: 'text'
		},
		{
			name: 'picture',
			title: 'Picture',
			description: 'A headshot or other avatar for this expert',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{name: 'caption', type: 'string', title: 'Caption', description: 'This is a descriptive caption, not the alt text'},
				{name: 'alt', type: 'string', title: 'Alternate text', description: 'This will be used for the alternative text'}
			]
		},
		{
			name: 'cv',
			title: 'CV',
			type: 'file'
		},
		{
			name: 'office',
			title: 'Office',
			description: 'Location and room number',
			type: 'object',
			fields: [
				{name: 'room', title: 'Room', type: 'string'},
				{name: 'location', title: 'Location', type: 'reference', to: [{type: 'location'}]}
			]
		}
	],
	preview: {
		select: {
			title: 'name'
		}
	}
}

export default {
	name: 'location',
	title: 'Location',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			description: 'The displayed name of the location',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			description: 'A short description of the location',
			type: 'text'
		},
		{
			name: 'subject',
			title: 'Subject area',
			description: 'A brief statement of what subjects can be found in this location',
			type: 'text'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			}
		},
		{
			name: 'address',
			title: 'Address',
			type: 'object',
			fields: [
				{name: 'street', title: 'Street name', type: 'string'},
				{name: 'number', title: 'Number', type: 'string'},
				{name: 'city', title: 'City', type: 'string'}
			]
		},
		{
			name: 'coordinates',
			title: 'Coordinates',
			type: 'geopoint'
		},
		{
			name: 'phone',
			title: 'Phone number',
			description: 'The formatted phone number to use for contacting the desk at this location',
			type: 'string'
		},
		{
			name: 'featured',
			title: 'Featured location',
			description: 'Should this location be featured - on front page, location list, etc',
			type: 'boolean'
		},
		{
			name: '24x7',
			title: 'Open 24x7',
			description: 'Is this location open 24x7?',
			type: 'boolean'
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
			name: 'cv',
			title: 'CV',
			type: 'file'
		}
	],
	preview: {
		select: {
			title: 'name'
		}
	}
}

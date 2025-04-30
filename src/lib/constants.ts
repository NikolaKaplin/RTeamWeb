export type route = {
	name: string;
	path: string;
};
export const routes: route[] = [
	{ name: 'Blog', path: '/blog' },
	{
		name: 'Prices',
		path: '/prices'
	},
	{
		name: 'Docs',
		path: '/docs'
	},
	{
		name: 'Learn',
		path: '/learn'
	},
	{
		name: 'About',
		path: '/about'
	}
];

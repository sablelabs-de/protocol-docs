// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions'

export default defineConfig({
	integrations: [
		starlight({
			title: 'Sable Protocol',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sablelabs-de/proto-www' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
      ],
      plugins: [
        starlightVersions({
          versions: [
            {
              slug: '1.0',
              label: 'v1.0',
            },
          ],
        }),
      ],
		}),
	],
});

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
					label: 'Implementations',
					items: [
            { label: 'Overview', slug: 'implementations' },
            { label: 'Clients', slug: 'implementations/clients' },
            { label: 'Servers', slug: 'implementations/servers' },
            { label: 'SDKs & Libraries', slug: 'implementations/sdk-libraries' },
            { label: 'Integrations', slug: 'implementations/integrations' },
            { label: 'Bridges', slug: 'implementations/bridges' },
            { label: 'Tools', slug: 'implementations/tools' },
						{ label: 'Submitting an Implementation', slug: 'implementations/submitting' },
					],
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

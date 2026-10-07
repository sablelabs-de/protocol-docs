// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
//import starlightVersions from 'starlight-versions' //implement when we work on 1.1

export default defineConfig({
  site: 'https://proto.usesable.de/',
	integrations: [
		starlight({
      title: 'Sable Protocol',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sablelabs-de/protocol-docs' }],
      sidebar: [
        {
					label: 'Specification',
					items: [
            { label: 'Overview', slug: 'specification' },
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
        /*starlightVersions({
          exclude: ["implementations/**"],
          versions: [
            {
              slug: '1.0',
              label: 'v1.0',
            },
          ],
          }),*/
      ],
		}),
	],
});

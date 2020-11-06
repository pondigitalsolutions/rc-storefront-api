# Reaction Commerce integration with Vue Storefront

## Reaction Commerce
[Reaction](http://reactioncommerce.com) is a headless commerce platform built using Node.js, React, and GraphQL. It plays nicely with npm, Docker and Kubernetes.

![Reaction Admin](https://user-images.githubusercontent.com/20409254/61161477-bb033c80-a4b8-11e9-9c5e-4f4f6a68b8d0.png)

For a 'How to setup Reaction Commerce', please have a look at the [Readme](https://raw.githubusercontent.com/reactioncommerce/reaction/trunk/README.md) in the Reaction repository.

## Vue Storefront

[Vue Storefront](https://www.vuestorefront.io/) is a standalone PWA storefront for your eCommerce, possible to connect with any eCommerce backends.

![Vue Storefront - Headless Architecture](https://uploads-ssl.webflow.com/5e7cf661c23ac9df156d9c3d/5eff4a2497a1546ca057dcca_github_headless_architecture.png)

Vue Storefront uses its library [storefront ui](https://www.storefrontui.io/) as component library. 
For documentation on Vue Storefront, please have a look at thier [documentation](https://docs.vuestorefront.io/).

# Usage
Follow the [documentation](https://raw.githubusercontent.com/reactioncommerce/reaction/trunk/README.md) to install Reaction Commerce locally.

## Start Reaction Commerce (locally)

1. Clone the Reaction Commerce repositories (api, admin, hydra, identity)
2. Setup Reaction Commerce according to the [documentation](https://docs.reactioncommerce.com/docs/getting-started-developing-with-reaction)

## Setting up a Storefront 

1. Create a basic vue application or clone the template from [Vue Storefront](https://docs.vuestorefront.io/guide/general/introduction.html#installing-vue-storefront)
2. Install the integration plugin packages. **Note this does not require a global installation. Note we recommend using the latest version**

NPM:
```
npm install --save @pondigitalsolutions/rc-storefront-api
npm install --save @pondigitalsolutions/rc-storefront-composables
```

Yarn:
```
yarn add @pondigitalsolutions/rc-storefront-api
yarn add @pondigitalsolutions/rc-storefront-composables
```

3. Include the plugins into the configuration file `nuxt.config.js`:

```
buildModules: [
    [
      "@vue-storefront/nuxt",
      {
        coreDevelopment: true,
        useRawSource: {
          dev: ["@pondigitalsolutions/rc-storefront-composables"],
          prod: ["@pondigitalsolutions/rc-storefront-composables"],
        },
      },
    ],
  ]
```

4. Set the RuntimeConfig for the api url:

```
// nuxt.config.js

publicRuntimeConfig: {
    RC_API_URL: process.env.RC_API_URL,
}
```

5. Initialize the ApolloClient with the correct config settings. 
Optional: Create a separate configuration file for configuration such as default language etc.

```
// nuxt.config.js

import { setup } from "@pondigitalsolutions/reactioncommerce-api";
import { config } from "./reactioncommerce-config";
const { ...others } = config;

export default function ({ $config }) {
  setup({
    api: {
      uri: $config.RC_API_URL,
    },
    ...others,
  });
}
```

6. Implement a subsection of the integration. 
For example the `CatalogItem` overview page:

```
import {
  usePrimaryShop,
  useProduct,
  onSSR
} from "@pondigitalsolutions/reactioncommerce-composables";

export default {
  name: "ProductOverview",
  setup(props, context) {
    const { primaryShopId, getPrimaryShopId } = usePrimaryShop("primaryShop");
    const {
        products,
        totalProducts,
        search,
        loading,
    } = useProduct("categoryProducts");

    onSSR(async () => {
      await getPrimaryShopId();
      await search({
        shopId: primaryShopId.value,
        searchstring: searchParam.value,
        perPage: 20,
        page: 1
      });
    });
  }
}
```

# Developer Certificate of Origin
We use the [Developer Certificate of Origin (DCO)](https://developercertificate.org/) in lieu of a Contributor License Agreement for all contributions to Pon Digital Solutions open source projects. We request that contributors agree to the terms of the DCO and indicate that agreement by signing-off all commits made to Pon Digital Solutions projects by adding a line with your name and email address to every Git commit message contributed:

```
Signed-off-by: Jane Doe <jane.doe@example.com>
```

You can sign-off your commit automatically with Git by using `git commit -s` if you have your `user.name` and `user.email` set as part of your Git configuration.

We ask that you use your real full name (please no anonymous contributions or pseudonyms) and a real email address. By signing-off your commit you are certifying that you have the right to submit it under the [GNU AGPLv3 License](https://github.com/pondigitalsolutions/rc-storefront-api/blob/main/License).

We use the [Probot DCO GitHub app](https://github.com/apps/dco) to check for DCO sign-offs of every commit.

If you forget to sign-off your commits, the DCO bot will remind you and give you detailed instructions for how to amend your commits to add a signature.

# Thanks 
Many thanks to Reaction Commerce, Vue Storefront and Home Assistent for being a inspiration for the issue templates and docs!!

# License
This integration is [GNU AGPLv3 Licensed](https://github.com/pondigitalsolutions/rc-storefront-api/blob/main/License)
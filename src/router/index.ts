import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - Alireza Souran',
      metaTags: [
        {
          name: 'description',
          content: 'Im Alireza Souran, happy developer from Iran!',
        },
        {
          name: 'twitter:description',
          content: 'Im Alireza Souran, happy developer from Iran!',
        },
        {
          name: 'twitter:image',
          content: 'https://alisouran.ir/img/profile.png',
        },
        {
          name: 'twitter:image:secure_url',
          content: 'http://alisouran.ir/img/profile.png',
        },
        {
          name: 'twitter:site',
          content: '@alisouran',
        },
        {
          name: 'twitter:creator',
          content: '@alisouran',
        },
        {
          name: 'twitter:title',
          content: 'Alireza Souran CV',
        },
        {
          name: 'og:title',
          content: 'Alireza Souran CV',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://alisouran.ir/',
        },
        {
          name: 'og:updated_time',
          content: '2021-08-04T00:00:00+00:00',
        },
        {
          name: 'og:description',
          content: 'Im Alireza Souran, happy developer from Iran!',
        },
        {
          name: 'og:image',
          content: 'https://alisouran.ir/img/profile.png',
        },
        {
          name: 'og:image:secure_url',
          content: 'http://alisouran.ir/img/profile.png',
        },
        {
          name: 'keywords',
          content:
            'React, Vue, Next, Node, Hire, Developer, Ali, Souran, Alireza, Moradi',
        },
      ],
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About - Alireza Souran',
      metaTags: [
        {
          name: 'description',
          content:
            'I will tell you a story about Alireza Moradi Souran; Look at my skills and if I can help you, hire me. ',
        },
        {
          name: 'twitter:description',
          content:
            'I will tell you a story about Alireza Moradi Souran; Look at my skills and if I can help you, hire me. ',
        },
        {
          name: 'twitter:image',
          content: 'https://alisouran.ir/img/profile.png',
        },
        {
          name: 'twitter:image:secure_url',
          content: 'http://alisouran.ir/img/profile.png',
        },
        {
          name: 'twitter:site',
          content: '@alisouran',
        },
        {
          name: 'twitter:creator',
          content: '@alisouran',
        },
        {
          name: 'twitter:title',
          content: 'Do you know WHO AM I? :)',
        },
        {
          name: 'og:title',
          content: 'Do you know WHO AM I? :)',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://alisouran.ir/',
        },
        {
          name: 'og:updated_time',
          content: '2021-08-04T00:00:00+00:00',
        },
        {
          name: 'og:description',
          content:
            'I will tell you a story about Alireza Moradi Souran; Look at my skills and if I can help you, hire me. ',
        },
        {
          name: 'og:image',
          content: 'https://alisouran.ir/img/profile.png',
        },
        {
          name: 'og:image:secure_url',
          content: 'http://alisouran.ir/img/profile.png',
        },
        {
          name: 'keywords',
          content:
            'React, Vue, Next, Node, Hire, Developer, Ali, Souran, Alireza, Moradi',
        },
      ],
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: "Let's Talk - Alireza Souran",
      metaTags: [
        {
          name: 'description',
          content:
            "I glad to meet you now, remember send me a message; I've lots of things to tell you.",
        },
        {
          name: 'twitter:description',
          content:
            "I glad to meet you now, remember send me a message; I've lots of things to tell you.",
        },
        {
          name: 'twitter:image',
          content: 'https://alisouran.ir/img/profile.png',
        },
        {
          name: 'twitter:image:secure_url',
          content: 'http://alisouran.ir/img/profile.png',
        },
        {
          name: 'twitter:site',
          content: '@alisouran',
        },
        {
          name: 'twitter:creator',
          content: '@alisouran',
        },
        {
          name: 'twitter:title',
          content: 'Let\'s Talk to Me',
        },
        {
          name: 'og:title',
          content: 'Let\'s Talk to Me',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://alisouran.ir/',
        },
        {
          name: 'og:updated_time',
          content: '2021-08-04T00:00:00+00:00',
        },
        {
          name: 'og:description',
          content:
            "I glad to meet you now, remember send me a message; I've lots of things to tell you.",
        },
        {
          name: 'og:image',
          content: 'https://alisouran.ir/img/profile.png',
        },
        {
          name: 'og:image:secure_url',
          content: 'http://alisouran.ir/img/profile.png',
        },
        {
          name: 'keywords',
          content:
            'React, Vue, Next, Node, Hire, Developer, Ali, Souran, Alireza, Moradi',
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title as string;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]')
  ).map((el: any) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  const nearestMeta = nearestWithMeta.meta as any;
  nearestMeta.metaTags
    .map((tagDef: any) => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag: any) => document.head.appendChild(tag));

  next();
});

export default router;

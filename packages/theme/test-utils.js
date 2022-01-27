import { render } from '@testing-library/vue';

const $t = (text) => text;
const $n = (text) => text;
const $fc = (text) => text;
const localePath = (path) => path;
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const customRender = (component, options = {}, callback = null) => render(component, {
  mocks: {
    $t,
    $n,
    $fc,
    localePath,
    $nuxt: {
      context: {
        app: {
          localePath,
          $cookies: {
            get: jest.fn(),
          },
        },
      },
    },
    ...options?.mocks,
  },
  stubs: {
    NuxtImg: {
      template: '<img src="image-stub.png" class="nuxt-img" alt="image"/>',
    },
  },
  ...options,
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
}, callback);

export * from '@testing-library/vue';
export * from '~/test-utils/mocks';
export { customRender as render };
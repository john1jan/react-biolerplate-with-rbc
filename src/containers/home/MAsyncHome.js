import { asyncComponent } from 'react-async-component';

if (typeof require.ensure !== "function") require.ensure = function (d, c) { c(require) };



export default asyncComponent({
  resolve: () => new Promise(resolve =>
    // Webpack's code splitting API w/naming
    require.ensure(
      [],
      (require) => {
        resolve(require('./MHomeContainer'));
      },
      "mhome"
    )
  )
});
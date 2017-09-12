import { asyncComponent } from 'react-async-component';

if (typeof require.ensure !== "function") require.ensure = function (d, c) { c(require) };

export default asyncComponent({
  resolve: () => new Promise(resolve =>
    require.ensure(
      [],
      (require) => {
        resolve(require('./MNotFoundContainer'));
      },
      'mnotFound'
    )
  )
});
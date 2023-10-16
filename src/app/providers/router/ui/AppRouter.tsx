import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/ui/PageLoader';

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{element}</div>
          </Suspense>
        )}
        path={path}
      />
    ))}
  </Routes>
);

export default AppRouter;

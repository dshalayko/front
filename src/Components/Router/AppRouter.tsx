import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import Navbar from "../Navbar";
import { useTypedSelector } from "../../Store/hooks/useTypedSelector";
import { useActions } from "../../Store/hooks/useActions";
import { check } from "../../API/userAPI";
import Loader from "../Loader";

const AppRouter = (): JSX.Element => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { setIsAuthTrue } = useActions();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    check().then((res: any) => {
      res.verification
        ? setIsAuthTrue()
        : alert("Please wait for data verification");
    });
  }, []);

  return (
    <BrowserRouter>
      {isAuth && <Navbar />}
      <Suspense fallback={<Loader />}>
        <section>
          <Switch>
            {!isAuth &&
              publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} exact />
              ))}

            {isAuth &&
              authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} exact />
              ))}
            {isAuth ? <Redirect to="/catalog" /> : <Redirect to="/" />}
          </Switch>
        </section>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;

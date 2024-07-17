import { useRoutes } from "react-router-dom";
import VerticalLayout from "../layout/vertical-layout.tsx";
import { DashboardPage } from "../pages/dashboard/dashboard.page.tsx";

function Routes() {
  // const { changeLanguage } = useLang();
  /*
    useEffect(() => {
      if (changeLanguage && user?.language) {
        changeLanguage(user.language);
      }
    }, [user?.language]);
    */

  const element = useRoutes([
    {
      element: <VerticalLayout />,
      children: [
        {
          path: "*",
          element: <DashboardPage />,
        },
      ],
    },
  ]);

  return element;
}

export default Routes;

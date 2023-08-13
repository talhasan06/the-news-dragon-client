import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/Home/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsNCondition from "../Shared/TermsNCondition/TermsNCondition";

 const router = createBrowserRouter([
    {
      path:'/',
      element:<LoginLayout></LoginLayout>,
      children:[
        {
          path:'/',
          element:<Navigate to="category/0"></Navigate>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'terms',
          element:<TermsNCondition></TermsNCondition>
        }
      ]
    },
    {
      path: "category",
      element: <Main></Main>,
      children:[
        {
          path:':id',
          element:<Category></Category>,
          loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        },
      ]
    },
    {
        path:'news',
        element:<PrivateRoute><NewsLayout></NewsLayout></PrivateRoute>,
        children:[
          {
            path:':id',
            element:<News></News>,
            loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
          }
        ]
    }
]);
export default router;